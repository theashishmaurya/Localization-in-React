import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TolgeeProvider } from "@tolgee/react";
import { UI } from "@tolgee/ui";

ReactDOM.render(
  <React.StrictMode>
    <TolgeeProvider
      apiKey={process.env.REACT_APP_TOLGEE_API_KEY}
      apiUrl={process.env.REACT_APP_TOLGEE_API_URL}
      ui={process.env.REACT_APP_TOLGEE_API_URL ? UI : undefined}
      availableLanguages={["en", "hi"]}
    >
      <App />
    </TolgeeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
