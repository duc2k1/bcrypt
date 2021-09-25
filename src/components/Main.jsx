import React from "react";
import Encrypt from "./Encrypt.jsx";
import Decrypt from "./Decrypt.jsx";

const Main = () => (
  <div>
    <div className="row">
      <div className="col">
        <Encrypt />
      </div>
      <div className="col">
        <Decrypt />
      </div>
    </div>
  </div>
);

export default Main;
