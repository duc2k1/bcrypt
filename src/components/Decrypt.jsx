import React, { useState } from "react";
import styled from "styled-components";
import { TextBig, TextCenter } from "../styled/styled";
import { useInput } from "../hooks/useInput";
import { Container } from "../styled/styled";
const bcryptjs = require("bcryptjs");

const Decrypt = () => {
  const [hash, hashInput] = useInput({
    type: "text",
    placeholder: "Hash to check",
  });
  const [str, strInput] = useInput({
    type: "text",
    placeholder: "String to check again",
  });
  const [doing, setDoing] = useState(false);

  function eventDecrypt(str, hash) {
    setDoing(true);
    bcryptjs.compare(str, hash).then((res) => {
      setDoing(false);
      alert(res);
    });
  }

  return (
    <Container>
      <TextBig>Decrypt</TextBig>
      {hashInput}
      <br />
      {strInput}
      <div className="d-flex justify-content-center">
        <Button onClick={() => eventDecrypt(str, hash)}>Click me</Button>
      </div>
      {doing && <TextCenter>Decrypting..............</TextCenter>}
      <div
        className="alert alert-warning alert-dismissible fade show"
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

export default Decrypt;
