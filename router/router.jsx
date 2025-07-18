import Home from "../src/Containers/Home";
import Register from "../src/Containers/Register";
import Chat from "../src/containers/Chat";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Chat" element={<Chat />} />
    </Routes>
  );
}

export default Router;
