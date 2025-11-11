import ArrayExample from "./components/ArrayExample"
import BooleanExample from "./components/BooleanExample"
import ConditionalFetch from "./components/ConditionalFetch"
import Counter from "./components/Counter"
import Dependencies from "./components/Dependencies"
import FetchBasic from "./components/FetchBasic"
import Home from "./components/Home"
import InputChange from "./components/InputChange"
import InputSubmit from "./components/InputSubmit"
import LocalStorageExample from "./components/LocalStorageExample"
import ObjExample from "./components/ObjExample"
import PerfectFetch from "./components/PerfectFetch"
import Timer from "./components/Timer"
import TitleUpdate from "./components/TitleUpdate"
import UseEffectBasic from "./components/UseEffectBasic"

function App(){
  const obj = {
    name: "Kabirjeet",
    paragraph: "I am kabirjeet Currently Studying CSE",
    image: "data:image/png;base64,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"
  }

  return(
    <>
      <h1>Hello World</h1>
      <Home object={obj}/>
      <Counter />
      <InputChange />
      <InputSubmit />
      <BooleanExample />
      <ArrayExample />
      <ObjExample />
      <UseEffectBasic />
      {<TitleUpdate />}
      <Dependencies />
      <Timer />
      <FetchBasic />
      <PerfectFetch />
      <ConditionalFetch />
      <LocalStorageExample />
    </>
  )
}

export default App
