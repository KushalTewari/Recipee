import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/home"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Details />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
