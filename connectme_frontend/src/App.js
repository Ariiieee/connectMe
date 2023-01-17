import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
const App = () => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="/*" element={<Home />} />
		</Routes>
	);
};

export default App;
//NOTES: container folder contains large components that would house smaller component like home, ---while component folder would house small components
