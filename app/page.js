import Image from "next/image";
import styles from "./page.module.css";
import WeatherCard from "./components/WeatherCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.mainHeader}>Weather App</h1>
        <div className={styles.mainWrapper}>
          <WeatherCard 
            city="Beijing" 
            currentTemp="70"
            highTemp="80"
            lowTemp="68"
            cloudiness="50"
            humidity="38"
            windspeed="8"
          />
        </div>
      </main>
    </div>
  );
}
