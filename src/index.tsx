import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyle from "./styles/global";
import "./styles/fonts/fonts.css"
import { Modal } from "@components/modals/Modal";

window.onload = function () {

  const container = document.querySelector("#root")!;
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <GlobalStyle />
          <Modal />
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
