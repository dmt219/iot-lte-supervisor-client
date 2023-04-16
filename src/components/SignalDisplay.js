import { React, useState, useEffect, useRef, use } from "react";
import styles from '../styles/SignalDisplay.module.css'
// import "../styles/variables.module.scss"

const RangeSlider = (signal, signalValueIndex) => {
	const [val, setVal] = useState(0);
	const MAX_VALUE = 255;
	const SIGNAL_RSRP = "RSRP"
	const SIGNAL_RSRQ = "RSRQ"

	useEffect(() => {
		const intervalID = setInterval(() => {
			setVal(Math.floor(Math.random() * MAX_VALUE))
		}, 1000)
		return function cleanup() { clearInterval(intervalID) }
	}, [])

	const getSignalValue = (signal, valIndex) => {
		const rsrp_dBm = valIndex - 140
  		const rsrq_dB = valIndex * 0.5 - 19.5
		if (signal == SIGNAL_RSRP) return `${rsrp_dBm} + dBm`
		if (signal == SIGNAL_RSRQ) return `${rsrq_dB} + dB`
	}

	// This is not ideal just because it needs knowledge of how wide the track is.
	// Ideally I'd like to do this more dynamically so it works with any track length,
	// but for the sake of smooth animations I kept it like this.
	const getPlacement = () => {
		return (val * 5.2) + `%`;
	};

	// This is kinda hacky, but if the background is rounded at too low a value, you can see it peeking out from behind the emoji.
	const greaterThanFifty = () => {
		return val > (MAX_VALUE/2) ? `var(--roundness)` : `0`;
	};

	// Makes the color smoothly move from red to orange to yellow
	const getHappinessColor = () => {
		return `rgba(255, ${106 + (103 / MAX_VALUE * val)}, ${(Math.floor(val * -1 / 7.692)) + 13})`;
	};

	// Adjusts the amount of yellow in the filled slider
	const getSliderBackground = () => {
		return `linear-gradient(
			to right, 
			red ,
			yellow,
			RGBA(127, 255, 0, 1)
			)`
	};

	// Changes which emoji is displayed
	const getHappiness = () => {
		let moods = ["😡", "😠", "😦", "😶", "🙁", "😐", "🙂", "😊", "😄", "😃", "😍"]

		if (val === 0) {
			return "🤬";
		}

		return moods[(Math.floor(val * moods.length / MAX_VALUE))];
	}

	return (
		<>
			<form id="slider" className={styles.slider}>
				<label
					htmlFor="range"
					style={{
						color: getHappinessColor()
					}}
				>
					Happiness: {val + ' '}
					{/* getSignalValue(signal, val) */}
				</label>

				<input
					name="val"
					id="range"
					type="range"
					min="0"
					max={MAX_VALUE}
					value={val}
					/>

				<div className={styles.outer}>
					<label
						htmlFor="range"
						style={{
							width: `${val/MAX_VALUE * 100}%`,
							borderRadius: greaterThanFifty(),
							background: getSliderBackground()
						}}
						className={styles.inner}
						>
					</label>
					<span
						className={styles.emoji}
						style={{ 
							transform: `translateX(${getPlacement()})` 
						}}
					>
						{getHappiness()}
					</span>
				</div>
			</form>
		</>
	);
}

const SignalDisplay = (signal) => {
	
	//const [listSignals, setListSignals] = useState({})
	//const [arraySignals, setArraySignals] = useState([])
	//const [errorMessage, setErrorMessage] = useState('')
	// callAPI
	// useEffect(async () => {
	// 	setErrorMessage('')
		
	// })

	// update listSignals
	// useEffect(() => {
	// 	const updateListSignals = []
	// 	Object.values(listSignals).forEach((signal) => {
	// 		updateListSignals.push({
	// 			...signal
	// 		})
	// 	})
	// 	setArraySignals(updateListSignals)
	// }, [listSignals])

	return (
		<RangeSlider signal = {signal}/>
	);
}

export default SignalDisplay