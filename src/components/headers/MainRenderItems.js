import { Clear } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearTodos } from "../../store/testerSlice";

import MainTwoRender from "./MainTwoRender";
import SubtastForm from "./SubtastForm";

function MainRenderItems() {
  const { todos } = useSelector((store) => store.test);
  const dispatch = useDispatch();

  function clearHandler(todosId) {
   
    dispatch(clearTodos(todosId));
  }
  return (
    <FormStyled>
      {todos.map((el) => {
        return (
          <div key={el.id}>
        

            <h2 >{el.question}</h2>
        
            
            <SubtastForm  el={el} />
            <MainTwoRender {...el} />
            <Clear onClick={() => clearHandler(el.id)} />
          </div>
        );
      })}
    </FormStyled>
  );
}

export default MainRenderItems;

const FormStyled = styled.div`
  background: silver;
  border: 2px solid red;
  margin-top: 20px;
  & div {
    margin-top: 20px;
  }
`

