import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";

const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
