import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CoinPage from "./components/CoinPage";
import { makeStyles } from "@material-ui/core"
import './App.css';

function App() {
  const useStyles  = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }))

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
