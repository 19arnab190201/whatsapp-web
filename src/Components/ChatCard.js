import React from "react";
import { Card } from "react-bootstrap";

const ChatCard = ({data}) => {
  return (
   
    <div className='chat-info'>
      <Card className='chat-profile'>
        <Card.Body>
             <div className='chat-display'>
             <div className='profile'>
          <img
            width={50}
            height={50}
            src={data.profilePic}
            alt='i'></img>
        </div>
        <div className='right-text'>
             <div className='user-name'>{data.userName}</div>
            <div className='last-msg'>{data.lastMsg}</div>
        </div>
           
        </div>
       

        </Card.Body>
      </Card>
    </div>
  );
};

export default ChatCard;
