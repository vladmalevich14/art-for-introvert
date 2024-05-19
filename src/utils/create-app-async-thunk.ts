import { AppDispatch, RootStateType } from "app/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**Эта функция предназначена для того, чтобы избавиться от дублирования кода по созданию типов в санке*/

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootStateType;
  dispatch: AppDispatch;
  rejectValue: null | any;
}>();
