import React from "react";
import TwoRenderItem from "./TwoRenderItem";

function MainTwoRender({ questionTwo, id }) {
  return (
    <ul>
      {questionTwo.map((el) => {
        return <TwoRenderItem key={el.id} todosId={id} {...el} />
      })}
    </ul>
  );
}

export default MainTwoRender;
