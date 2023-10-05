import React from "react";
import "./EmailForm.css";

export default function EmailForm() {
    return (
        <div className="email-form-container">
            <div className="email-form-parent">
                <div className="email-form-box">
                    <div className="email-form-title">
                        <h1>Reach Out 📧</h1>
                        <div className="colz">
            <div className="colz-icon">

            <a href="https://www.linkedin.com/in/richard-webb-b479b81b3">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Rymedy">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://stackoverflow.com/users/14077691/rymedy">
              <i className="fa fa-stack-overflow"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013651848295">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/richard_weeb/?hl=en">
              <i className="fa fa-instagram"></i>
            </a>
            </div>
          </div>
          <h3>Send an email here!</h3>
          <img
          src={require('../../../assets/ContactMe/emailbg.jpg')}
          alt="img failed to load"
        />
                    </div>
                    <div className="send-email">
                    <div className="send-email-form">
                    <form action="https://formsubmit.co/fc8c837f27c72dea940941f76b88ecbf" method="POST">
					<input type="hidden" name="_captcha" value="false" />
                    <h1>Email</h1>
					<input type="email" name="email" required />
                    <h1>Message</h1>
					<textarea className="message-text-area" type="text" name="message" required />
					<button className="btn primary-btn" type="submit">Send <i className="fa fa-paper-plane-o"></i></button>
				    </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}