import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { saveEvent } from '../../services/Server';

interface ICreate {
  description: string;
  endRegistration: Date;
  endEvent: Date;
  sumPrice?: number;
  showSumPrice: boolean;
}

export default function Create() {
  const { register, handleSubmit, watch, reset } = useForm<ICreate>();

  const showSumPrice = watch('showSumPrice');
  console.log(showSumPrice);
  const submit: SubmitHandler<ICreate> = ({ description, endEvent, endRegistration, showSumPrice, sumPrice }) => {
    const event: IEvent = {
      description,
      endEvent,
      endRegistration,
      sumPrice: showSumPrice ? sumPrice : 0,
    };
    saveEvent(event);
    alert('Save');
    reset();
  };

  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(submit)}>
        <label>
          Название
          <input {...register('description', { required: true })} />
        </label>
        <label>
          Дата жеребьевки
          <input type="date" {...register('endEvent', { required: true })} />
        </label>
        <label>
          Отправить подарок до
          <input type="date" {...register('endRegistration', { required: true })} />
        </label>
        <label>
          Рекомендуемая стоимость подарка
          <input type="checkbox" {...register('showSumPrice')} />
          {showSumPrice && <input type="number" {...register('sumPrice', { required: true })} />}
        </label>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
