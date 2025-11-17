import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/HomeScreen";
import Profile from "./Components/ProfileScreen";
import Shop from "./Components/ShopScreen";
import Nav from 'react-bootstrap/Nav';
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import Example1 from "./Components/Example-1";
import Example2 from "./Components/Example-2";
import Example3 from "./Components/Example-3";

function App() {
  const fetchDataEx4 = async () => {
    const url = 'https://webhook.site/dc3ac83c-3363-4d7c-9902-de5304aa80c6';

    const payload = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };
    try {
      const response = await fetch( url, {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      console.log('Response from server:' , result);
      
    } catch (error) {
      console.error('Error while sending', error);
      
    }

  }

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/home">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/shop" className="nav-link">Shop</NavLink>
      </Nav>


      <Routes>
        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
        <Route path="*" element={<h1>Page isn't found</h1>} />
      </Routes>

      <PostList />

      <Example1></Example1>
      <Example2></Example2>
      <Example3 />

      <div>
        <h4>Exercise 4: POST JSON Data</h4>
        <button onClick={fetchDataEx4}>Send data</button>
      </div>
    </>
  )
}

export default App
