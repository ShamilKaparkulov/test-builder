import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTest } from "../../store/testerSlice";
import Button from "../UI/Button";
import MainRenderItems from "./MainRenderItems";

function MainTester() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const data = {
    question: value,
    id: Math.random().toString(),
    questionTwo: [],
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim().length > 0) {
      
      dispatch(addTest(data));
    }


    setValue("");
  };

  return (
    <BoxConteinerStyled>
      <ConteinerFormStyled>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button>Добавить Тест</Button>
        </form>

        <MainRenderItems />
      </ConteinerFormStyled>
    </BoxConteinerStyled>
  );
}

export default MainTester;

const ConteinerFormStyled = styled.div`
  padding-top: 50px;
  width: 500px;
  height: 500px;
  background-color: aqua;
  text-align: center;
  margin: auto;
  list-style: none;
& form {
  border: 2px solid black;
}
  & input {
    width: 250px;
    height: 30px;
    border-radius: 10px;
  }
`;
const BoxConteinerStyled = styled.main`
  width: 100%;
  height: 1000px;
  background: yellow;
`;
