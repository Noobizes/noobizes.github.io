import React from 'react';
import { FC } from 'react';

const TeamCard: FC<{
  img?: string;
  icon?: string;
  firstname: string;
  pseudo?: string;
  role: string;
  tasks: string;
  socialUrl?: string;
  socialIcon?: 'linkedin' | 'twitter' | 'twitch';
}> = ({
  img = 'anon',
  icon = 'desktop',
  firstname,
  pseudo,
  role,
  tasks,
  socialUrl,
  socialIcon = 'linkedin',
}) => {
  const SocialIcon = () => {
    switch (socialIcon) {
      case 'linkedin':
        return (
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 0.5H1.45312C0.65625 0.5 0 1.20312 0 2.04688V20C0 20.8438 0.65625 21.5 1.45312 21.5H19.5C20.2969 21.5 21 20.8438 21 20V2.04688C21 1.20312 20.2969 0.5 19.5 0.5ZM6.32812 18.5H3.23438V8.51562H6.32812V18.5ZM4.78125 7.10938C3.75 7.10938 2.95312 6.3125 2.95312 5.32812C2.95312 4.34375 3.75 3.5 4.78125 3.5C5.76562 3.5 6.5625 4.34375 6.5625 5.32812C6.5625 6.3125 5.76562 7.10938 4.78125 7.10938ZM18 18.5H14.8594V13.625C14.8594 12.5 14.8594 11 13.2656 11C11.625 11 11.3906 12.2656 11.3906 13.5781V18.5H8.29688V8.51562H11.25V9.875H11.2969C11.7188 9.07812 12.75 8.23438 14.25 8.23438C17.3906 8.23438 18 10.3438 18 13.0156V18.5Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        );
      case 'twitch':
        return (
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3281 4.875H15.5V10.0312H17.3281V4.875ZM12.3594 4.82812H10.5312V9.98438H12.3594V4.82812ZM4.625 0L0.125 4.3125V19.7344H5.5625V24L10.0625 19.7344H13.6719L21.8281 12V0H4.625ZM20.0469 11.1562L16.3906 14.5781H12.7812L9.64062 17.5781V14.5781H5.5625V1.73438H20.0469V11.1562Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        );
      case 'twitter':
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 6.125 17.7812 6.6875 17.0781 6.6875C16.375 6.6875 15.8125 6.125 15.8125 5.42188C15.8125 4.71875 16.375 4.15625 17.0781 4.15625C17.7812 4.15625 18.3438 4.71875 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z"
              fill="white"
              fill-opacity="0.5"
            />
          </svg>
        );
    }
  };

  return (
    <div className="team-card-wrapper">
      <div className="team-card">
        <img className="team-card_image" src={`/img/team/${img}.png`} />
        <div className="team-card_content">
          <div className="team-card_name">
            <img
              className="team-card_name-icon"
              src={`/img/team-icon/${icon}.svg`}
            />
            <span className="team-card_name-label">{firstname}</span>
            {pseudo && pseudo !== '' && (
              <span className="team-card_name-pseudo">| {pseudo}</span>
            )}
          </div>
          <div className="team-card_info">
            <span className="team-card_info-role">{role}</span>
            <span className="team-card_info-tasks">{tasks}</span>
          </div>
          <div className="team-card_footer">
            <a
              href={socialUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="team-card_footer-icon"
            >
              <SocialIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
