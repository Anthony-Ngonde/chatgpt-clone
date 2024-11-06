import './ChatPage.css'
import NewPrompt from '../../components/NewPrompt/NewPrompt';

const ChatPage = () => {



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
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage