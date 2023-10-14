import "./App.scss";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import MainRoute from "./routes/MainRoute";

function App() {
  const { dark } = useSelector((s) => s);

  return (
    <div
      style={{ background: dark ? "#1F2E35" : "", transition: "0.5s" }}
      className="App"
    >
      <Header />
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
