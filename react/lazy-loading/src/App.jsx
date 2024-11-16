import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
const Dashboard = lazy(() => import("./Components/Dashboard"));
const HomePage = lazy(() => import("./Components/HomePage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"...loading"}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={"...loading"}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
