import React, { useState } from "react";
import styled from "styled-components";
import { TextBigCenter, TextCenter, Button } from "../styled/styled";
import { useInput } from "../hooks/useInput";
import { Container } from "../styled/styled";
import Alert from "./Alert";
const bcryptjs = require("bcryptjs");

const Encrypt = () => {
  const [str, strInput] = useInput({
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
      <TextBigCenter>Encrypt</TextBigCenter>
      {strInput}
      <TextCenter>Salt Rounds</TextCenter>
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
            ᐊ
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
            ᐅ
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

const Salt = styled.div`
  color: black;
  margin-inline: 5px;
`;

const SaltRounds = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100px;
`;

export default Encrypt;
