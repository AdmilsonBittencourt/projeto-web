import { useLayoutEffect, useRef, useState } from "react";

export function LayoutEffectExample() {
  const [width, setWidth] = useState(0);

   const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: "200px", height: "50px", background: "lightblue" }}>
        Caixa
      </div>
      <p>Largura medida: {width}px</p>
    </div>
  );
}
