import { Link } from "react-router-dom";
import React from "react";
import Heading from "./components/heading";
import Label from "./components/label";
import Textbox from "./components/textbox";
// import Submit from "./components/buttons";
import Home from "./components/home";
import "./components/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Valid() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const submithandlers = (e) => {
    e.preventDefault();

    if (email === "valid@email.com" && password === "valid@password") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  if (isvalid) {
    navigate("/home");
  }

  return (
    <div>
      <Heading heading="Shiv nadar" />
      <div>
        <form onSubmit={submithandlers}>
          <Label label="Email" />
          <br />
          <Textbox
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <Label label="Password" />
          <br />
          <Textbox
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/* <Submit type="submit" onClick={submithandlers} /> */}
          <button type="button" onClick={submithandlers}>
            Button
          </button>
        </form>
      </div>
    </div>
  );
}

export default Valid;
