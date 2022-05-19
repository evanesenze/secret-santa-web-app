import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { saveEvent, getEvent, editEvent } from '../../../services/Server';
import './style.css';

interface ICreate {
  description: string;
  endRegistration: string;
  endEvent: string;
  sumPrice?: number;
  showSumPrice: boolean;
}

const EditGame: React.FC = () => {
  const { register, handleSubmit, watch, reset } = useForm<ICreate>();
  const { id } = useParams();
  const showSumPrice = watch('showSumPrice');

  const submit: SubmitHandler<ICreate> = ({ description, endEvent, endRegistration, showSumPrice, sumPrice }) => {
    if (!id) {
      const event: IEvent = {
        description,
        endEvent,
        endRegistration,
        sumPrice: showSumPrice ? sumPrice : 0,
      };
      saveEvent(event)
        .then(() => alert('Save'))
        .then(() => reset());
    } else {
      const existEvent: IExistEvent = {
        id,
        description,
        endEvent,
        endRegistration,
        sumPrice: sumPrice ?? 0,
        reshuffle: false,
        sendFriends: false,
        tracking: false,
      };
      editEvent(existEvent).then(() => alert('edit'));
    }
  };

  const loadGameData = async () => {
    if (!id) return;
    const data = await getEvent(id);
    if (!data.ok) return;
    const gameData = data.response as IExistEvent;
    reset({
      description: gameData?.description,
      endEvent: gameData?.endEvent,
      endRegistration: gameData?.endRegistration,
      showSumPrice: !!gameData?.sumPrice,
      sumPrice: gameData?.sumPrice,
    });
  };

  useEffect(() => {
    loadGameData();
  }, []);

  return (
    <>
      <h1 className="title">{id ? 'Изменение' : 'Создание'} игры</h1>
      <form onSubmit={handleSubmit(submit)}>
        <section className="inputs_container">
          <div className="input_zone">
            <label className="titles_inputs">
              Название игры
              <input className="input_title_game" type="text" placeholder="Например, Тайный Санта 2022" {...register('description', { required: true })} />
            </label>
          </div>
          <div className="set_date_zone">
            <label className="titles_inputs">
              Дата жеребьевки
              <input className="input_date" type="date" placeholder="дд/мм/гггг" {...register('endEvent', { required: true })} />
            </label>
          </div>
          <div className="send_date_zone">
            <label className="titles_inputs">
              Отправить подарок до
              <input className="input_date" type="date" placeholder="дд/мм/гггг" {...register('endRegistration', { required: true })} />
            </label>
          </div>
        </section>
        <section className="recommended_cost_container">
          <div className="recommended_cost">
            <p className="title_recommended_cost">Рекомендуемая стоимость подарка</p>
            <span>При включении опции участникам смогут увидеть рекомендуемую стоимость, для получения подарка</span>
          </div>
          <label className="switch">
            <input type="checkbox" {...register('showSumPrice')} />
            <span className="slider_round"></span>
          </label>
          {showSumPrice && (
            <div className="gift_cost">
              <p className="title_gift_cost">Сумма подарка</p>
              <input className="input_gift_cost" type="number" {...register('sumPrice', { required: true })} />
              <select className="select_currency" name="currency" id="currency">
                <option className="currency">Руб</option>
              </select>
            </div>
          )}
        </section>
        <div className="button">
          <button className="create_button" type="submit">
            {id ? 'изменить' : 'создать'}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditGame;
