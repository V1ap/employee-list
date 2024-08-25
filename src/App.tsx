import { Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import EditEmployee from "./pages/EditEmployee/EditEmployee";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
      </Routes>
    </main>
  );
}

export default App;
