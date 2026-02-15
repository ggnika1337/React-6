import { useState } from "react";
import "./App.css";
import Main from "./components/__organisms/main-container/main";
// import Finished from "./components/__organisms/finished-container/finished"; (move d to main.jsx)

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
