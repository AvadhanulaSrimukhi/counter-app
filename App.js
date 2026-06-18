import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>Counter App Using useReducer</h1>

      <h2>{state.count}</h2>

      <div className="button-group">
        <button
          className="btn increment"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>

        <button
          className="btn decrement"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>

        <button
          className="btn reset"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;