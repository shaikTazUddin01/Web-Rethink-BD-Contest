import { Divider } from "antd";
import React from "react";
import Notice from "./Notice";
import Member from "./Member";

const Contant = () => {
  return (
    <div className="h-screen flex  items-center gap-5">
      <div className="w-[70%]  h-full"></div>
      <div className="w-[30%]  h-full py-10">
        <Notice></Notice>
        <Member></Member>
      </div>
    </div>
  );
};

export default Contant;
