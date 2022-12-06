import { CheckBox, Delete, Edit } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteVariants, saveVariants } from "../../store/testerSlice";

function TestVariants({ variants, todosId, quationId }) {
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(null);
  // console.log(todosId, "todosid");
  // console.log(quationId, "quationid");
  const dispatch = useDispatch();

  function deleteVariantHandler(elId) {
    const dataId = {
      todosId,
      quationId,
      elId,
    };
    dispatch(deleteVariants(dataId));
  }

  const opentModal = (id, value) => {
    setEditValue(value);
    setEditId(id);
  };

  const saveSubHandler = (id) => {
    dispatch(saveVariants({ id, todosId, quationId, editValue }));
    setEditId (null);
  };
  return (
    <div>
      {variants.map((el) => {
        return (
          <div key={el.id}>
            {el.id === editId ? (
              <div>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />{" "}
                 <button onClick={() => saveSubHandler(el.id)}>save</button>
              </div>
            ) : (
              <ul key={el.id}>{el.variantValue}</ul>
            )}

            <CheckBox />
            <Delete onClick={() => deleteVariantHandler(el.id)} />
            <Edit onClick={() => opentModal(el.id, el.variantValue)} />
          </div>
        );
      })}
    </div>
  );
}

export default TestVariants;
