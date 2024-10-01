import styles from "../page.module.css"

export default function WeatherCard({ city, currentTemp, highTemp, lowTemp, cloudiness, humidity, windspeed }) {
    return (
        <div className={styles.weatherCardWrapper}>
            <div className={styles.cardTop}>
                <h2>{city}</h2>
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.cardBottomLeft}>x</div>
                <div className={styles.cardBottomRight}>
                    <div className={styles.mainDetails}>
                        <p className={styles.currTemp}>{currentTemp}°F</p>
                        <p>Cloudiness: {cloudiness}</p>
                    </div>
                    <div className={styles.minorDetails}>
                        <p>High Temperature: {highTemp}°F</p>
                        <p>Humidity: {humidity}%</p>
                        <p>Low Temperature: {lowTemp}°F</p>
                        <p>Wind Speed: {windspeed} MPH</p>
                    </div>
                </div>
            </div>
            

            
            
        </div>
    )
}