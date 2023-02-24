import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<header className="header">
				<Link to="/">
					<img src={logo} alt="logo" className="w-28 object-contain" />
				</Link>

				<Link to="/create-post" className="create_button">
					Create
				</Link>
        

			</header>        
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create-post" element={<CreatePost />}/>
          </Routes>
        </main>
		</BrowserRouter>
	);
};

export default App;
