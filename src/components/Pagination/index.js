import "./index.css";
import { useStore } from "../../store/init";


export default function Pagination() {

  const [ state, dispatch ] = useStore(); 

  const rightArrowClick = () => {
    if (state.users.padding + 5 < state.users.list.length)
    dispatch({type: 'user/Search', payload: { padding: state.users.padding + 5
  }});
  }

  const leftArrowClick = () => {
    if (state.users.padding >= 5)
      dispatch({type: 'user/Search', payload: { padding: state.users.padding - 5
      }});
  }

  return <>
      <span onClick={leftArrowClick} className="arrow">{"<<<"}</span>
      <span onClick={rightArrowClick} className="arrow">{">>>"}</span>
   </>
}