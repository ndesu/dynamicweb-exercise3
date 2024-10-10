import styles from "../page.module.css";
import WeatherIcon from "./WeatherIcon";
// import cloud from "@/app/weatherapp-cloud.png"

export default function WeatherCard({
  city,
  currentTemp,
  highTemp,
  lowTemp,
  cloudiness,
  humidity,
  windspeed,
  weatherType,
}) {
  const cloudinessPercentage = 100 - cloudiness;
  // const background = `rgba(20,80,150,${cloudinessPercentage})`
  const background = `linear-gradient(45deg, rgba(237, 211, 145, 0.5), ${cloudinessPercentage}%, rgba(35, 55, 87, 0.5))`;
  return (
    <div className={styles.weatherCardWrapper} style={{ background }}>
      <div className={styles.cardTop}>
        <h2>{city}</h2>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomLeft}>
          <WeatherIcon weatherType={weatherType} />
          {/* <img src="@/app/weatherapp-cloud.png" alt="cloud"/> */}
        </div>
        <div className={styles.cardBottomRight}>
          <div className={styles.mainDetails}>
            <p className={styles.currTemp}>{currentTemp}°F</p>
            <p>Cloudiness: {cloudiness}%</p>
          </div>
          <div className={styles.minorDetails}>
            <div>
              <p>High: {highTemp}°F</p>
              <p>Low: {lowTemp}°F</p>
            </div>
            <div>
              <p>Humidity: {humidity}%</p>
              <p>Wind Speed: {windspeed} MPH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
