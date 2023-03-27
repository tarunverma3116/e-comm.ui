import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes/index";
import GlobalSpinner from "./components/Spinner/GlobalSpinner";
import { ToastContainer } from "react-toastify";

function App() {
  const [account, setAccount] = React.useState<any>(null);
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App dark:bg-white">
            <PublicRoutes account={account} setAccount={setAccount} />
            <PrivateRoutes account={account} setAccount={setAccount} />
            <GlobalSpinner />
            <ToastContainer
              // id="toast-message"
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
