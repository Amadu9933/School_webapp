import { useState } from "react";
import ReactLogo from "../../assets/react.svg";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav
			className={`bg-gray-800 p-4 md:rounded-none sm:rounded-10  lg:rounded-full  px-10 py-10 ${
				isMenuOpen ? "rounded-bl-full pt-0" : "rounded-full"
			}`}>
			<div className="container mx-auto flex justify-between items-center">
				{!isMenuOpen && (
					<div className="text-white font-bold text-xl flex ">
						<a
							href="https://www.youtube.com/c/jamesqquick"
							className="youtube social mr-5">
							<FontAwesomeIcon icon={faFacebook} size="2x" />
						</a>
						<a
							href="https://www.youtube.com/c/jamesqquick"
							className="youtube social">
							<FontAwesomeIcon icon={faTwitter} size="2x" />
						</a>
					</div>
				)}

				{/* Toggle button for small screens */}
				<button
					className="lg:hidden  text-white focus:outline-none"
					onClick={toggleMenu}>
					{isMenuOpen ? (
						""
					) : (
						<img src={menu} alt="" className="w-10 h-10 bg-white rounded-md" />
					)}
				</button>

				{/* Menu items */}
				<div
					className={`lg:flex ${
						isMenuOpen ? "block" : "hidden"
					} mt-4 lg:mt-0 `}>
					{/* Toggle button for small screens */}
					<button
						className="lg:hidden text-white focus:outline-none"
						onClick={toggleMenu}>
						{isMenuOpen ? (
							<img src={close} alt="" className="w-10 h-10 rounded-md" />
						) : (
							"Menu"
						)}
					</button>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						Home
					</a>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						About
					</a>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						Contact
					</a>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						Classes
					</a>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						Teachers
					</a>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						Events
					</a>
					<a
						href="#"
						className="block text-white hover:bg-gray-700 px-2 py-1 rounded">
						Galerry
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
