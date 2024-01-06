import Admission from "../assets/admission.webp";
import donate from "../assets/Doonate.png";
import staff from "../assets/staff.webp";
import events from "../assets/events.png";
import "animate.css";
import "../App.css";

const About: React.FC = () => {
	return (
		<div className="about-container bg-gray-200 text-center pt-10">
			<h1 className="welcome text-3xl lg:text-5xl font-extrabold animate__animated animate__bounce">
				Welcome to
			</h1>
			<h1 className=" text-3xl lg:text-5xl text-blue-900 font-extrabold">
				The Al-Furquan Basic School <br />
				<span className="bg-blue-700 text-blue-700 text-xs">
					helllllllllbnwdhhhfhfhfhhlllllll
				</span>
			</h1>

			<p className="lg:mx-32 text-gray-700 my-10">
				arter School for Children The Mission of The Bronx Charter School for
				Children is to empower our children to achieve their greatest potential
				both as students and as members of their communities.
			</p>
			<div className="card-container mx-10 lg:flex flex-wrap  flex gap-8 items-center justify-around text-center lg:mx-44 ">
				<div className="w-56 h-52 bg-blue-950 hover:bg-blue-800   flex-col flex justify-center items-center rounded-tl-3xl">
					<div>
						<img
							src={Admission}
							alt=""
							className="  w-28 h-28 rounded-md mr-5 "
						/>
						<p className="text-gray-200 text-3xl font-bold">Admission </p>
					</div>
				</div>
				<div className="w-56 h-52 bg-blue-950 hover:bg-blue-800 flex justify-center items-center">
					<div>
						<img src={donate} alt="" className="h-28 w-28 rounded-md mr-5 " />
						<p className="text-gray-200 text-3xl font-bold">Donate </p>
					</div>
				</div>
				<div className="w-56 h-52 bg-blue-950 hover:bg-blue-800 flex justify-center items-center">
					<div>
						<img src={staff} alt="" className="h-28 w-28 rounded-md mr-5 " />
						<p className="text-gray-200 text-3xl font-bold">Staff </p>
					</div>
				</div>
				<div className="w-56 h-52 bg-blue-950 hover:bg-blue-800 flex justify-center items-center rounded-tr-3xl">
					<div>
						<img src={events} alt="" className="h-28 w-28 rounded-md mr-5 " />
						<p className="text-gray-200 text-3xl font-bold">Events</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
