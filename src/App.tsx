import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./routes/index";
import GlobalSpinner from "./components/Spinner/GlobalSpinner";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App dark:bg-white">
          <PublicRoutes />
          <GlobalSpinner />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
