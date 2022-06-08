import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sort: {
      name: 'популярности',
      sort: 'rating', 
    }
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action) {
      console.log(action);
      state.categoryId = action.payload;
    },
    setSortValue(state, action) {
      console.log(action);
      state.sort = action.payload;
    }
  }
})

export const filterReducer = filterSlice.reducer;
export const {setCategory, setSortValue} = filterSlice.actions;