import ContactCard from './ContactCard';

export default () => (
  <div id="wrapper">
    <form name="contact" id="contact-form" method="post" action="#">
      <h1>Send us a message</h1>
      <div className="inputbox">
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=""
          tabIndex="1"
          className="txtinput"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=""
          tabIndex="2"
          className="txtinput"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder=""
          tabIndex="3"
          className="txtinput"
        />
      </div>
      <div className="inputbox">
        <label htmlFor="message">Your message</label>
        <textarea
          name="message"
          id="message"
          placeholder=""
          tabIndex="4"
          className="txtinput"
        />
      </div>
      <a href="">Submit</a>
    </form>

    <section className="right-side">
      <ContactCard />
    </section>
    <style jsx>
      {`
        #wrapper {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          grid-column-gap: 7.5rem;
          justify-items: flex-end;
          align-content: unset;
          align-items: center;
          grid-template-rows: 800px;
        }
        #contact-form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          width: 60%;
        }
        #contact-form h1 {
          margin-top: 0px;
        }
        #contact-form a {
          padding: 0.5em;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 8%;
          text-align: center;
          background-color: #4b7447;
          color: #fff;
          font-size: 2vw;
          align-self: center;
        }
        #contact-form a:hover {
          padding: 0.5em 0.7em;
          background-color: #fff;
          border: 2px solid #4b7447;
          color: #121111;
        }
        .inputbox {
          display: flex;
          flex-direction: column;
          font-size: 1.25em;
        }
        .txtinput {
          height: 80%;

          margin-bottom: 20px;
          font-size: 1.25em;
          padding: 11px 25px 0 0;
          border: 1px solid black;
          width: 70%;
          color: #000;

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset;
          -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset;
          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset;

          transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
          -webkit-transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
          -moz-transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
          -o-transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
        }
        .txtinput:focus {
          color: #333;
          border-color: rgba(41, 92, 161, 0.4);

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset,
            0 0 8px rgba(41, 92, 161, 0.6);
          -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset,
            0 0 8px rgba(41, 92, 161, 0.6);
          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset,
            0 0 8px rgba(41, 92, 161, 0.6);
          outline: 0 none;
        }

        #contact-form textarea {
          border: 1px solid black;
          margin-bottom: 15px;
          font-size: 1.5em;

          width: 90%;
          height: 180px;
          color: #777;

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset;
          -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset;
          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset;

          transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
          -webkit-transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
          -moz-transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
          -o-transition: border 0.15s linear 0s, box-shadow 0.15s linear 0s,
            color 0.15s linear 0s;
        }
        #contact-form textarea:focus {
          color: #333;
          border-color: rgba(41, 92, 161, 0.4);

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset,
            0 0 8px rgba(40, 90, 160, 0.6);
          -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset,
            0 0 8px rgba(40, 90, 160, 0.6);
          -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) inset,
            0 0 8px rgba(40, 90, 160, 0.6);
          outline: 0 none;
        }

        .right-side {
          justify-self: first baseline;
          align-self: baseline;
          height: 80%;
          padding-top: 80px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 80%;
          width: 80%;
          align-content: space-evenly;
        }
      `}
    </style>
  </div>
);
