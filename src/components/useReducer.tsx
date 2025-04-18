import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state: { count: number; }, action: { type: any; }) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    case "reset": return initialState;
    default: throw new Error();
  }
}

export function ContadorReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Resetar</button>
    </div>
  );
}
