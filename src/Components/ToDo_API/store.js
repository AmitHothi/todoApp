import {configureStore} from "@reduxjs/toolkit"
import  todoReducer from "./todo_slice"
export const store= configureStore({
    reducer: {
        todo: todoReducer,
    },
});