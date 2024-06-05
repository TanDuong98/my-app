import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./component/Header";
import { Toolbar } from "./component/Toolbar";
import { Home } from "./page/Home";
import { postData } from "./ulti/api";

function App() {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const handleCheckAll = (e) => {
    const isChecked = e.target.checked;
    setIsCheckAll(isChecked);
  };

  return (
    <div className="App">
      <header className="App-header px-3">
        <Header />
        <Toolbar onHandleCheckAll={handleCheckAll} />
        <Home isCheckAll={isCheckAll} />
      </header>
    </div>
  );
}

export default App;
