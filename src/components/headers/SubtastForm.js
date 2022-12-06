import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubQuation } from "../../store/testerSlice";

const SubtastForm = ({ el }) => {
  const [subText, setSubText] = useState("");
  const dispatch = useDispatch();
  console.log(el.id, "todosid");

  const quationData = {
    title: subText,
    id: Math.random().toString(),
    todosId: el.id,
    variants: [],
  };
  function addSubTask() {
    setSubText("") 
    if (subText.trim().length > 0) {
      return dispatch(addSubQuation(quationData));
    }

  }

  return (
    <>
      <input
        type="text"
        value={subText}
        onChange={(e) => setSubText(e.target.value)}
      />
      <button onClick={addSubTask}>Добавить вопрос</button>
    </>
  );
};

export default SubtastForm;
