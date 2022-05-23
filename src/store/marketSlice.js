import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    pizzas: [
        
    ]
}

export const marketSlice = createSlice({
  name: "marketSlice",
  initialState,
  reducers: {

  }
})

export const marketReducer = marketSlice.reducer;
export const {} = marketSlice.actions;