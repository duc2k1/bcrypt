import React, { useState } from "react";
import styled from "styled-components";
import { TextBig, TextCenter } from "../styled/styled";
import { useInput } from "../hooks/useInput";
import { Container } from "../styled/styled";
const bcryptjs = require("bcryptjs");

const Encrypt = () => {
  const [str, strInput] = useInput({ type: "text", placeholder: "String" });
  const [salt, setSalt] = useState(0);
  const [doing, setDoing] = useState(false);

  function eventEncrypt(str, saltRounds) {
    setDoing(true);
    bcryptjs.hash(str, saltRounds).then((err, hash) => {
      setDoing(false);
      alert(err || hash);
    });
  }

  return (
    <Container>
      <TextBig>Encrypt</TextBig>
      {strInput}
      <div className="d-flex justify-content-center">
        <SaltRounds>
          <Button
            onClick={() => {
              if (salt === 0) {
                setSalt(0);
              } else {
                setSalt(salt - 1);
              }
            }}
          >
            Prev
          </Button>
          <Salt>{salt}</Salt>
          <Button
            onClick={() => {
              if (salt === 20) {
                setSalt(20);
              } else {
                setSalt(salt + 1);
              }
            }}
          >
            Next
          </Button>
        </SaltRounds>
      </div>
      <div className="d-flex justify-content-center">
        <Button onClick={() => eventEncrypt(str, salt)}>Click me</Button>
      </div>
      {doing && <TextCenter>Encrypting..............</TextCenter>}
      <div
        className="mt-2 alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </Container>
  );
};

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 5px;
`;

const Salt = styled.div`
  color: black;
  margin: 10px;
`;

const SaltRounds = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 100px;
`;

export default Encrypt;
