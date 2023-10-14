import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Massage = () => {
  const { dark } = useSelector((s) => s);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");

  const TOKEN = `6466121121:AAHdmiqiojN923OtZ-hykihdUdcZZOILeBE`;
  const CHAT_ID = `-1001905468426`;
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  let values = `name: ${name}\n`;
  values += `email:\n${email}\n`;
  values += `massage: ${massage}\n`;

  const setForm = async () => {
    let data = await axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_model: "html",
      text: values,
    });
    console.log(data);
  };

  return (
    <section id="massage">
      <div className="container">
        <form
          style={{ border: dark ? "1px solid #464646" : "1px solid #ddd" }}
          className="massage"
        >
          <h1 style={{ color: dark ? "#fff" : "" }}>Send a message</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
          />
          <input
            onChange={(e) => setMassage(e.target.value)}
            type="text"
            placeholder="Your Message"
          />
          <button
            onClick={() => setForm()}
            style={{ color: dark ? "#fff" : "" }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Massage;
