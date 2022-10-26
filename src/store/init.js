import { createContext, useContext, useReducer } from "react";
import { combineReducers } from "../utils";
import pageReducer from "./reducers/pageReducer"
import usersReducer from "./reducers/usersReducer";


const StoreContext = createContext();

const initialState = {
  page: { address: "", localprops: {} },
  users: {
    search: "",
    list: [],
    padding: 0,
  }
}

const reducer = combineReducers({
  page: pageReducer,
  users: usersReducer
});


export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={[state, dispatch]} {...props} />
} 

export const useStore = () => useContext(StoreContext);