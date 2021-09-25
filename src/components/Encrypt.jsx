import React, { useState } from "react";
import styled from "styled-components";
import { TextBig, TextCenter } from "../styled/styled";
import { useInput } from "../hooks/useInput";
import { Container } from "../styled/styled";
import Alert from "./Alert";
const bcryptjs = require("bcryptjs");

const Encrypt = () => {
  const [str, strInput] = useInput({
    type: "text",
    placeholder: "String",
    propVal: "hello world",
  });
  const [salt, setSalt] = useState(0);
  const [doing, setDoing] = useState(false);
  const [hash, setHash] = useState(
    "$2a$10$VEfKDTkTlY0/RtmG5nxHT.GjjB4H5.FF5FfivKkGbQIJOMuZrCENi"
  );

  function eventEncrypt(str, saltRounds) {
    setDoing(true);
    bcryptjs.hash(str, saltRounds).then((err, newHash) => {
      setDoing(false);
      setHash(err || newHash);
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
      <Alert content={hash} />
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
