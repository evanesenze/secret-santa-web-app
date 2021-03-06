import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import playerIcon from '../../../assets/playerIcon.png';
import Loader from '../../Loader';
import './style.css';

const DesignatedUser: React.FC<IDefaultProps> = ({ serverController }) => {
  const { id } = useParams();
  const [recipientInfo, setRecipientInfo] = useState<IRecipientInfo>();

  const loadRecipientInfo = async () => {
    if (!id) return;
    const res = await serverController.getRecipientInfo(id);
    if (!res.ok) return alert('Error');
    setRecipientInfo(res.response as IRecipientInfo);
  };

  useEffect(() => {
    loadRecipientInfo();
  }, []);

  return (
    <>
      {!recipientInfo && <Loader />}
      {!!recipientInfo && (
        <div className="designated_user_content">
          <div style={{ display: 'flex', alignItems: 'flex-end' }} className="default_player_card">
            <div style={{ width: '100%' }} className="default_player_card__image">
              <img src={playerIcon} />
            </div>
          </div>
          <div className="designated_user_content_info">
            <div className="designated_user_content_info_text">
              <div style={{ width: '100%', marginBottom: '1%', marginTop: '5%' }} className="default_input">
                <span>{recipientInfo.name}</span>
              </div>
            </div>
            <div className="designated_user_content_info_text">
              <div style={{ width: '100%', marginBottom: '1%' }} className="default_input">
                <span>{recipientInfo.preferences}</span>
              </div>
            </div>
            <div className="designated_user_content_info_text">
              <div style={{ width: '100%', marginBottom: '1%' }} className="default_input">
                <span>{recipientInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesignatedUser;
