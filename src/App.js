import "./css/App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <AppNavbar title="Demo App" />
      <Home />
    </>
  );
}

export default App;
