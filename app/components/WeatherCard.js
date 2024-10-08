import styles from "../page.module.css"
import WeatherIcon from "./WeatherIcon"
// import cloud from "@/app/weatherapp-cloud.png"

export default function WeatherCard({ city, currentTemp, highTemp, lowTemp, cloudiness, humidity, windspeed, weatherType }) {
    return (
        <div className={styles.weatherCardWrapper}>
            <div className={styles.cardTop}>
                <h2>{city}</h2>
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>
                    <WeatherIcon weatherType={weatherType}/>
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
    )
}