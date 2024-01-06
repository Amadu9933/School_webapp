import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar";
import About from "./components/About";

const App: React.FC = () => {
	return (
		<>
			<header className=" bg-cover bg-center  pb-44 ">
				<Topbar />
				<Navbar />
				<div className="text-white py-24 animate__animated animate__backInLeft contact">
					<a href="" className="text-red-400">
						Contact
					</a>
					<p className="text-3xl lg:text-5xl font-bold">Get In Touch</p>
					<p className="sm:text-xs md:text-xs">
						<span>Email:</span> <br /> amaduhamzajaarah300@gmail.com
					</p>
					<p>
						<span>Phone:</span> <br /> +233 55 000 0000
					</p>
				</div>
			</header>
			<main className="mb-48">
				<About />
			</main>
		</>
	);
};

export default App;
