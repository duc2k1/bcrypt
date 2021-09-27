import React from "react";
import Encrypt from "./Encrypt.jsx";
import Decrypt from "./Decrypt.jsx";

const Main = () => (
  <div>
    <div className="row">
      <div className="col-md-6 col-sm-12 col-12">
        <Encrypt />
      </div>
      <div className="col-md-6 col-sm-12 col-12">
        <Decrypt />
      </div>
    </div>
  </div>
);

export default Main;
