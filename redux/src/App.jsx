import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch(); //for working actions

  const count = useSelector((state) => state.counter.value); //for showing updates

  const [num, setNum] = useState(5);
  return (
    <div>
      <h1 className="text-white">{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="bg-gray-400 cursor-pointer"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="bg-gray-400 cursor-pointer"
      >
        Decrement
      </button>

      <input
        type="number"
        className="bg-gray-400 cursor-pointer"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
        className="bg-gray-400 cursor-pointer"
      >
        Increment by Amount
      </button>
    </div>
  );
};

export default App;
