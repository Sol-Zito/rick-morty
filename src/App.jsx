import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsCharacterContainer from "./components/detailsCharacter/DetailsCharacterContainer";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/home/Home";
import Layout from "./components/Layout/Layout";
import CharactersContainer from "./components/characters/CharactersContainer";
import ContextCharsProvider from "./Context/ContextChars";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextCharsProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<h1>Login</h1>} />
              <Route path="/home" element={<Home />} />
              <Route path="/characters" element={<CharactersContainer />} />
              <Route
                path="/detailsCharacter/:id"
                element={<DetailsCharacterContainer />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContextCharsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
