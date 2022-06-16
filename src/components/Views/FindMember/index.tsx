import React, { useEffect, useState } from 'react';
import './style.css';
import useDebounce from '../../../hooks/useDebounce';

interface IFindMemberProps extends IDefaultProps {
  gameData: IExistEvent;
}

const FindMember: React.FC<IFindMemberProps> = ({ gameData }) => {
  const [searchInput, setSearchInput] = useState('');
  const searchValue = useDebounce(searchInput, 500);
  const [members, setMembers] = useState<any[]>([]);

  const searchFilter = (value: any) => {
    const { memberView } = value;
    const memberName = `${memberView.surname} ${memberView.name} ${memberView.patronymic}`;
    return memberName.includes(searchValue);
  };

  useEffect(() => setMembers(gameData.memberView?.filter(searchFilter)), [searchValue]);

  return (
    <div style={{ height: '100%', width: '100%', paddingTop: '1%' }}>
      <section className="find_member__container">
        <div className="default_info_card">
          <div className="default_info_card__title">{new Date(String(gameData?.endRegistration)).toLocaleDateString()}</div>
          <div className="default_info_card__description">Дата жеребьёвки</div>
        </div>
        <div className="default_info_card">
          <div className="default_info_card__title">{new Date(String(gameData?.endEvent)).toLocaleDateString()}</div>
          <div className="default_info_card__description">Отправить подарки до</div>
        </div>
        <div className="default_info_card">
          <div className="default_info_card__title">{gameData.membersCount}</div>
          <div className="default_info_card__description">Кол-во участников</div>
        </div>
      </section>
      <section className="container_fullname">
        <input className="input_fullname" type="text" placeholder="введите ФИО участника" onChange={(e) => setSearchInput(e.target.value)} />
      </section>
      <section className="container_members_table">
        <div className="members_table__row members_table__title">
          <div>#</div>
          <div>Пользователь</div>
          <div>Кому отправляет</div>
          <div>От кого получает</div>
        </div>

        {members.map((item, index) => {
          const { memberRecipient, memberSender, memberView } = item;
          const memberName = `${memberView.surname} ${memberView.name} ${memberView.patronymic}`;
          const senderName = `${memberSender.surname} ${memberSender.name} ${memberSender.patronymic}`;
          const recipientName = `${memberRecipient.surname} ${memberRecipient.name} ${memberRecipient.patronymic}`;
          return (
            <div key={index} className="members_table__row">
              <div>{index + 1}</div>
              <div>{memberName}</div>
              <div>{recipientName}</div>
              <div>{senderName}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FindMember;
