// import './App.css'
import { GlobalContextProvider } from "./context/Globalcontext";
import LandingPage from "./Pages/LandingPage";
import UserAuthentication from "./Pages/UserAuthentication";

function App() {
  const isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn")); // true or false

  return (
    <GlobalContextProvider>
      <>
        {
          // CODITIONAL RENDERING
          isUserLoggedIn ? <LandingPage /> : <UserAuthentication />
        }
      </>
    </GlobalContextProvider>
  );
}

export default App;
