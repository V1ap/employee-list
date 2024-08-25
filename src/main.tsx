import { createRoot } from "react-dom/client";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "@/styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        limit={7}
      />
    </BrowserRouter>
  </Provider>
);
