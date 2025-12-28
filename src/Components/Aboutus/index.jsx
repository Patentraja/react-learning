import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, twotable, threetable } from "../../reducer";

const About = () => {
const state=useSelector((state)=>state.counter);
const dispatch=useDispatch();
  return <>
  <p>{state.value}</p>
  <button onClick={()=>dispatch(increment())}  >Add</button>
  <button onClick={()=>dispatch(decrement())} disabled={state.value==0}>Sub</button>
  <button onClick={()=>dispatch(reset())} disabled={state.value==0}>reset</button>
    <button onClick={()=>dispatch(twotable())}>twotable</button>
      <button onClick={()=>dispatch(threetable())}>threetable</button>
  </>
};
export default About;
