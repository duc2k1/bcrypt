import React, { useState } from "react";
import styled from "styled-components";
import { TextBig, TextCenter } from "../styled/styled";
import { useInput } from "../hooks/useInput";
import { Container } from "../styled/styled";
import Alert from "./Alert";
const bcryptjs = require("bcryptjs");

const Decrypt = () => {
  const [hash, hashInput] = useInput({
    type: "text",
    placeholder: "Hash to check",
    propVal: "$2a$10$VEfKDTkTlY0/RtmG5nxHT.GjjB4H5.FF5FfivKkGbQIJOMuZrCENi",
  });
  const [str, strInput] = useInput({
    type: "text",
    placeholder: "String to check again",
    propVal: "hello world",
  });
  const [doing, setDoing] = useState(false);
  const [result, setResult] = useState(true);

  function eventDecrypt(str, hash) {
    setDoing(true);
    bcryptjs.compare(str, hash).then((newResult) => {
      setDoing(false);
      setResult(newResult);
    });
  }

  return (
    <Container>
      <TextBig>Decrypt</TextBig>
      {strInput}
      <br />
      {hashInput}
      <div className="d-flex justify-content-center">
        <Button onClick={() => eventDecrypt(str, hash)}>Click me</Button>
      </div>
      {doing && <TextCenter>Decrypting..............</TextCenter>}
      <Alert content={result} result={result} />
    </Container>
  );
};

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  border: none;
  border-radius: 5px;
`;

export default Decrypt;
