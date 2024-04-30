import "./contact.scss";
import shake from "../../assets/shake.svg";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="test" placeholder="Email" />
          <textarea placeholder="Message"> </textarea>
          <button type="submit">Send</button>
          {message && 
            <span>Thanks for your e-mail, I`ll reply this e-mail ASAP. </span>
          }
        </form>
      </div>
    </div>
  );
}
