import locat from "../assets/placeholder.png";
import Time from "../assets/time.png";
const Topbar: React.FC = () => {
	//This the to content ontop of the navbar
	return (
		//School name
		<div className="flex justify-between py-10  ml-0 ">
			<div className="text-white font-bold lg:text-3xl text-left animate__animated animate__fadeInTopRight">
				<p className="text-4xl ">AL-FURQUAN</p>
				<p className="text-sm">JUNIOR HIGH SCHOOL</p>
			</div>

			<div
				className=" text-white  justify-between  hidden  lg:flex
             ">
				<img src={locat} alt="" className="w-10 h-10 rounded-md mr-5" />
				{/* Adresss section container*/}
				<p>
					34 Street Name, City Name Here
					<p>United States</p>
				</p>
			</div>
			{/*Working time container*/}
			<div className="text-white  justify-between  hidden  lg:flex">
				<img src={Time} alt="" className="w-10 h-10 mr-5 rounded-md" />
				<p>
					Sunday - Friday 8:00AM - 4:00PM
					<p>Saturday CLOSED</p>
				</p>
			</div>
		</div>
	);
};

export default Topbar;
