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
    <>
      <section className="find_member__container">
        <div className="info_window">
          <p className="info_numbers">{new Date(String(gameData?.endRegistration)).toLocaleDateString()}</p>
          <span className="info_description">Дата жеребьёвки</span>
        </div>
        <div className="info_window">
          <p className="info_numbers">{new Date(String(gameData?.endEvent)).toLocaleDateString()}</p>
          <span className="info_description">Отправить подарки до</span>
        </div>
        <div className="info_window">
          <p className="info_numbers">{gameData.membersCount}</p>
          <span className="info_description">Кол-во участников</span>
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
    </>
  );
};

export default FindMember;
