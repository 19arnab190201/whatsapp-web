import React, { useContext } from "react";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Utils/Theme";

import {
  MdMoreVert,
  MdSearch,
  MdInsertEmoticon,
  MdOutlineAttachFile,
  MdMic,
} from "react-icons/md";
import Bubble from "./Bubble";

const ChatRoom = () => {
  const theme = useContext(ThemeContext)[0];

  const currectTheme = AppTheme[theme];
  return (
    // <div>
    //   ChatRoom Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //   Incidunt laudantium explicabo soluta, molestiae quam inventore, laboriosam
    //   sint aperiam ea, rem necessitatibus? Quam repellat earum maxime itaque,
    //   esse sunt aperiam ad.
    // </div>
    <div className='container-right'>
      <div
        className='room-header'
        style={{
          backgroundColor: `${currectTheme.backgroundColor}`,
          color: `${currectTheme.textColor}`,
        }}>
        <div className='profile-picture'>
          <img
            width={40}
            height={40}
            src='https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg'
            alt='i'></img>
          <div className='user-name main-user-name'>Kheya</div>
        </div>
        <div className='main-icon-container'>
          <div className='icon-cont main-icon-cont'>
            <MdSearch
              className='icon main-icon'
              style={{
                color: `${currectTheme.icon}`,
              }}
            />
          </div>

          <div className='icon-cont  main-icon-cont'>
            <MdMoreVert
              className='icon main-icon'
              style={{
                color: `${currectTheme.icon}`,
              }}
            />
          </div>
        </div>
      </div>
      <div className='chat-box'>
        <Bubble />
        <Bubble />
        <Bubble />
      </div>
      <div className='msg-box'>
        <div className='media'>
          <MdInsertEmoticon />
          <MdOutlineAttachFile className='clip' />
        </div>
        <input type='text' className='msg-input' placeholder='Type a message' />
        <div className='microphone'>
          <MdMic />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
