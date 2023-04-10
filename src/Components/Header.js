import React, { useContext, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Utils/Theme";
import ChatCard from "./ChatCard";
import ModalComp from "./Modal";

import { useUserAuth } from "../Context/AuthContext";
import {
  MdDonutLarge,
  MdChat,
  MdMoreVert,
  MdSearch,
  MdPersonAdd,
} from "react-icons/md";

const Header = () => {
  const { logOut, user } = useUserAuth();
  const [modalShow, setModalShow] = useState(false);
  const data = {
    profilePic:
      "https://i.pinimg.com/564x/a9/d6/05/a9d60534f8f7b6e7d960892db9b0f4ae.jpg",
    userName: "Kheya",
    lastMsg: "🤮🤧😷 Hello",
  };
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];
  return (
    <div className='container-left'>
      <ModalComp
        user={user}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div
        className='head'
        style={{
          backgroundColor: `${currectTheme.backgroundColor}`,
          color: `${currectTheme.textColor}`,
        }}>
        <div className='profile-picture'>
          <img width={40} height={40} src={user.photoURL} alt='i'></img>
        </div>

        <div className='icons'>
          <div className='icon-cont'>
            <MdPersonAdd
              onClick={() => setModalShow(true)}
              className='icon'
              style={{
                color: `${currectTheme.icon}`,
              }}
            />
          </div>

          <div className='icon-cont'>
            <MdDonutLarge
              className='icon'
              style={{
                color: `${currectTheme.icon}`,
              }}
            />
          </div>
          <div className='icon-cont'>
            <MdChat
              className='icon'
              style={{
                color: `${currectTheme.icon}`,
              }}
            />
          </div>
          <div className='icon-cont'>
            <MdMoreVert
              onClick={() => {
                logOut();
              }}
              className='icon'
              style={{
                color: `${currectTheme.icon}`,
              }}
            />
          </div>
          {/* <ThemeToggler /> */}
        </div>
      </div>

      <div className='search-container'>
        <div className='search'>
          <span>
            <MdSearch style={{ width: "20px", height: "20px" }} />
          </span>{" "}
          <input
            type='text'
            placeholder='Search or start new chat'
            className='searchbar'
          />
        </div>
      </div>
      <div className='chat-list'>
        <ChatCard data={data} />
      </div>
    </div>
  );
};

export default Header;
