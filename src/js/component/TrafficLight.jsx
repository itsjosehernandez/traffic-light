import React, {useState} from "react";

//include images into your bundle


//create your first component
const TrafficLight = () => {
	const [lightRed, setLightRed] = useState("")
	const [lightYellow, setLightYellow] = useState("")
	const [lightGreen, setLightGreen] = useState("")
	const [lightNone, setLightNone] = useState("")

	const onActive = (color) => {
		if (color == "red") {
			setLightRed("activeL");
			setLightYellow("");
			setLightGreen("");
		} else if (color == "yellow"){
			setLightRed("");
			setLightYellow("activeL");
			setLightGreen("");
		} else if (color == "green"){
			setLightRed("");
			setLightYellow("");
			setLightGreen("activeL");
		} 
	};

		return (
			<>
			{/* className = activeL (switch's between active light color) */}
				<div className="traffic-container">
					<div className="light-container">						
					<div className={`light green ${lightGreen}`} 
							onClick={ () => onActive("green")}
							></div>						
							<div className={`light yellow ${lightYellow}`} 
							onClick={ () => onActive("yellow")}
							></div>
						<div 
							className={`light red ${lightRed}`} 
							onClick={ () => onActive("red")} 
							></div>


					</div>
					<div className="traffic-pole"></div>

					{/* reset button */}
					
				</div>
			</>
		);
};

// BONUS (Pending...):
// Countdown timer example:
// https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks

export default TrafficLight;