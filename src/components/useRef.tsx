import { useRef, useState } from 'react';

export function Contador() {
  const [contador, setContador] = useState(0);
  const renders = useRef(0);

  renders.current++;

  return (
    <div>
      <p>Contador: {contador}</p>
      <p>Renders: {renders.current}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
