import "./App.css";
import "./index.css";
import CharactersApiProvider from "./context/CharactersContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import DetailsCharacter from "./components/detailsCharacter/DetailsCharacter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CharactersApiProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="/detailsCharacter/:id"
              element={<DetailsCharacter />}
            />
          </Routes>
        </CharactersApiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
