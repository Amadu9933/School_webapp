import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar";

const App: React.FC = () => {
	return (
		<>
			<header className=" w-full px-8  bg-cover bg-center  pb-96">
				<Topbar />
				<Navbar />
			</header>
		</>
	);
};

export default App;
