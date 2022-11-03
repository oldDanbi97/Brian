import React from 'react';
import {useRecoilState} from "recoil";
import {recoilText} from "../../../recoil/atom";
import styled from "styled-components";

const RecoilTestInput = () => {
  const [text, setText] = useRecoilState(recoilText);
  const changeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"}}
    >
      <label>recoil test</label>
      <input
        type="text"
        value={text}
        onChange={changeText}
      />
      <p>{text}</p>
    </div>
  );
};

export default RecoilTestInput;