import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const audioSlice = createSlice({
    name: 'audio',
    initialState: {key:null, name: ''},
    reducers: {
      playAudio: (state, action) => {
        console.log(action, state);
        state.key = action.payload
        state.name = Math.random()
        // state.name = action.payload.name  
      },
    }
});

export const {playAudio} = audioSlice.actions;
export default audioSlice.reducer;