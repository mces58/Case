import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import MainContainer from "./layouts/MainContainer";
import { store } from "./redux/store";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <MainContainer />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;
