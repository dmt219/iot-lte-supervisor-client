import { React, useState, useEffect, useRef, use } from "react";
import styles from "styles/SignalDisplay.module.css";

const RangeSlider = ({ name, val, real }) => {
  const MAX_VALUE = 255;

  // This is not ideal just because it needs knowledge of how wide the track is.
  // Ideally I'd like to do this more dynamically so it works with any track length,
  // but for the sake of smooth animations I kept it like this.
  const getPlacement = () => {
    return (val / MAX_VALUE) * 12 + `em`;
  };

  // This is kinda hacky, but if the background is rounded at too low a value, you can see it peeking out from behind the emoji.
  const greaterThanFifty = () => {
    return val > MAX_VALUE / 2 ? `var(--roundness)` : `0`;
  };

  // Makes the color smoothly move from red to orange to yellow
  const getHappinessColor = () => {
    return `rgba(255, ${106 + (103 / MAX_VALUE) * val}, ${
      Math.floor((val * -1) / 7.692) + 13
    })`;
  };

  // Adjusts the amount of yellow in the filled slider
  const getSliderBackground = () => {
    return `linear-gradient(
			to right, 
			red ,
			yellow,
			RGBA(127, 255, 0, 1)
			)`;
  };

  // Changes which emoji is displayed
  const getHappiness = () => {
    let moods = [
      "😡",
      "😠",
      "😦",
      "😶",
      "🙁",
      "😐",
      "🙂",
      "😊",
      "😄",
      "😃",
      "😍",
    ];

    if (val === 0) {
      return "🤬";
    }

    return moods[Math.floor((val * moods.length) / MAX_VALUE)];
  };

  return (
    <>
      <form id="slider" className={styles.slider}>
        <label
          htmlFor="range"
          style={{
            color: getHappinessColor(),
          }}
        >
          {name}: {real} {name == "RSRP" ? "dBm" : "db"} {getHappiness()}
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
              width: `${(val / MAX_VALUE) * 100}%`,
              borderRadius: greaterThanFifty(),
              background: getSliderBackground(),
            }}
            className={styles.inner}
          ></label>
          <span
            className={styles.emoji}
            style={{
              transform: `translateX(${getPlacement()})`,
            }}
          ></span>
        </div>
      </form>
    </>
  );
};

const SignalDisplay = () => {
  const [rsrp, setRsrp] = useState({ rsrp: 0, rsrp_dbm: 0 });
  const [rsrq, setRsrq] = useState({ rsrq: 0, rsrq_db: 0 });
  useEffect(() => {
    async function fetchData() {
      await fetch("https://lte-supervisor.com/get_last_signal/")
        .then((res) => res.json())
        .then(function (data) {
          setRsrp({
            rsrp: data.rsrp,
            rsrp_dbm: data.rsrp_dbm,
          });
          setRsrq({
            rsrq: data.rsrq,
            rsrq_db: data.rsrq_db,
          });
        });
    }

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <RangeSlider name={"RSRP"} val={rsrp.rsrp} real={rsrp.rsrp_dbm} />
      <RangeSlider name={"RSRQ"} val={rsrq.rsrq} real={rsrq.rsrq_db} />
    </>
  );
};

export default SignalDisplay;
