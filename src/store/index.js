import { configureStore } from "@reduxjs/toolkit";
import testerSlice from "./testerSlice";

  


  const store = configureStore({
    reducer : {
        test: testerSlice.reducer
    }
  })

  export default store