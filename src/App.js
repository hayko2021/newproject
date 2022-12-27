import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/Posts.jsx";
import Message from "./components/Message/Message.jsx";
import Home from "./components/Home/Home.jsx";
import Likes from "./components/Likes/Likes.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Logout from "./components/Logout/Logout.jsx";
import Error from "./Pages/Error.jsx";
import HomeWrapper from "./Pages/HomeWrapper.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeWrapper />}>
            <Route index element={<Home />} />
            <Route path="message" element={<Message />} />
            <Route path="posts" element={<Posts />} />
            <Route path="likes" element={<Likes />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <div></div>
    </>
  );
}

export default App;
