import "./Test.css";
import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    mail: "",
    phone: "",
  });

  // const newUserList = user.map((u) => <p key={u}>Kullanıcı: {u}</p>);

  const minusCount = () => {
    if (count === 0) return;
    setCount((count) => count - 1);
  };

  const plusCount = () => {
    if (count >= 10) return;
    setCount((count) => count + 1);
  };

  function addUser() {
    for (const [name, value] of Object.entries(formData)) {
      if (!value) {
        alert(`${name} girilmedi!`);
        document.querySelector(`[name='${name}']`).focus();
        return;
      }
    }
    setUser((prev) => [...prev, formData]);
    setFormData({ username: "", mail: "", phone: "" });
  }

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <>
      <div className="container">
        <h1>How many times will Bob say state in this section?</h1>
        <div className="counter">
          <button
            onClick={minusCount}
            style={{ display: count === 0 ? "none" : "inline-block" }}
            className="minus"
            aria-label="Decrease count"
          >
            <span className="minus-span"></span>
          </button>
          <h1 className="count">{count}</h1>
          <button
            onClick={plusCount}
            style={{ display: count === 10 ? "none" : "inline-block" }}
            className="plus"
            aria-label="Increase count"
          >
            <span className="plus-span"></span>
          </button>
        </div>
      </div>

      <div className="form">
        <div className="field">
          <label
            htmlFor="txtUsername"
            style={{
              visibility: formData.username.length != 0 ? "visible" : "hidden",
            }}
          >
            {formData.username.length}
          </label>
          <input
            onChange={handleChange}
            value={formData.username}
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
          />
        </div>

        <div className="field">
          <label
            htmlFor="txtMail"
            style={{
              visibility: formData.mail.length != 0 ? "visible" : "hidden",
            }}
          >
            {formData.mail.length}
          </label>
          <input
            onChange={handleChange}
            value={formData.mail}
            type="text"
            name="mail"
            placeholder="Email Adresi"
          />
        </div>

        <div className="field">
          <label
            htmlFor="txtPhone"
            style={{
              visibility: formData.phone.length != 0 ? "visible" : "hidden",
            }}
          >
            {formData.phone.length}
          </label>
          <input
            onChange={handleChange}
            value={formData.phone}
            type="text"
            name="phone"
            placeholder="Telefon Numarası"
          />
        </div>

        <div className="field">
          <button onClick={addUser}>Personel Ekle</button>
        </div>
      </div>
      <ul>
        {user.map((u, i) => (
          <li key={i}>
            {u.username} - {u.mail} - {u.phone}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Test;
