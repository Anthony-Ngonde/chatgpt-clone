import React, { useEffect, useRef } from 'react'
import './ChatPage.css'

const ChatPage = () => {

  const endRef = useRef(null)

useEffect(() =>{
  endRef.current.scrollIntoView({behavior:"smooth"});
},[]);


  return (
    <div className='chatPage'>
      <div className="wrapper">
        <div className='chat'>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam cum vero molestias incidunt et consectetur magni eaque, saepe animi vel molestiae iste. Tenetur aut ab ex eveniet vitae vel laboriosam.</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>

          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>

          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>

          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>

          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>

          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div ref={endRef}/>
        </div>
      </div>
    </div>
  )
}

export default ChatPage