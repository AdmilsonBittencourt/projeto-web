import './App.css'
import { ParentComponent } from './components/useImperativeHandle'
import { LayoutEffectExample } from './components/useLayoutEffect'
import { Contador } from './components/useRef'
import { ContadorReducer } from './components/useReducer'

function App() {
  

  return (
    <>
      {/* <Contador /> */}
      {/* <ContadorReducer /> */}
      {/* <LayoutEffectExample /> */}
      <ParentComponent />
    </>
  )
}

export default App
