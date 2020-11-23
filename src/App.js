import { useDispatch, useSelector } from "react-redux";
import { add, sup } from "./redux/actions/counter";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(add())}>add</button>
      <button onClick={() => dispatch(sup())}>sup</button>
    </div>
  );
}

export default App;
