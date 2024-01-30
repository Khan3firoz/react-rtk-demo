import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./app/store";
import { CakeView } from "./features/cake/CakeView";
import { IceCreameView } from "./features/iceCreame/IceCreameView";
import { UserView } from "./features/users/UserView";

function App() {
  return (
    <>
      <div>
        <h1>React Readux Tool Kit Demo</h1>
        <CakeView />
        <IceCreameView />
        <UserView />
      </div>
    </>
  );
}

export default App;
