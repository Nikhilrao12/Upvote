import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upvote from "./components/Upvote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Upvote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
