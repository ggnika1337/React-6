import { useState } from "react";
import "./App.css";
import Main from "./components/__organisms/main-container/main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
