import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
