import { BrowserRouter, Route, Routes } from "react-router-dom";
import VerticalTabs from "./Pages/Navbar";
import AddStudents from "./Pages/AddStudents";

function App() {
  return (
    <div>
      <BrowserRouter>
        <VerticalTabs />
      </BrowserRouter>
    </div>
  );
}

export default App;
