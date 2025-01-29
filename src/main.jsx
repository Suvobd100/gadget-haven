import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { RouterProvider } from 'react-router-dom'
// import routes from './routes/Routes.jsx'
import LocalStorageDataProvider from "./components/utils/LocalStorageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LocalStorageDataProvider>
    <App />
  </LocalStorageDataProvider>
);
