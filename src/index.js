import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

window.ZOHO.embeddedApp.on("PageLoad", function () {
  // console.log(data);

  window.ZOHO.CRM.UI.Resize({ height: "500", width: "1300" }).then(function () {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});

window.ZOHO.embeddedApp.init();
