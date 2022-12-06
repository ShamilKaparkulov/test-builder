import { Add, Delete } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addSaveVariant, deleteQuestion } from "../../store/testerSlice";
import TestVariants from "./TestVariants";

function TwoRenderItem({ title, id, variants, todosId }) {
  const [isShowValue, setIsShowValue] = useState("");
  const [isShow, setIsShow] = useState();
    console.log(id, "shama");
  //   console.log(todosId, "baty");
  const dispatch = useDispatch();

  const childrenData = {
    variantValue: isShowValue,
    id: Math.random().toString(),
    todosId: todosId,
    quationId: id,
  };
  function addVariantsHandler() {
    setIsShow(true);
  }
 
  
  function addSaveEdit() {
    setIsShowValue("");
    setIsShow(false);
    if (isShowValue.trim().length > 0) {
      return dispatch(addSaveVariant(childrenData));
    }
  }
  
  function deleteQuestionHandler (id) {
    dispatch(deleteQuestion({todosId,id}))
  }
  return (
    <ConteinerLiStyled>
      <div>{`${title}?`}  <Delete onClick={ () =>deleteQuestionHandler (id)} /></div>

      {!isShow ? (
        <>
          <button onClick={addVariantsHandler}>Добавить вариант!</button>
        
        </>
      ) : (
        <>
          <Add onClick={addSaveEdit} />
          <input
            type="text"
            value={isShowValue}
            onChange={(e) => setIsShowValue(e.target.value)}
          />
        </>
      )}

      <TestVariants variants={variants} todosId={todosId} quationId={id} />
    </ConteinerLiStyled>
  );
}

export default TwoRenderItem;

const ConteinerLiStyled = styled.li`
  border: 2px solid black;
  width: 400px;
  height: 100%;
  background: silver;
  list-style: none;
  margin-top: 20px;
  & input {
    width: 70px;
    height: 20px;
  }
  & div {
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
  }
`
