import Header from "@/app/components/Header";
import styles from "@/app/page.module.css";
import WeatherCard from "@/app/components/WeatherCard";

export default async function Home({ params }) {
  const city = params.cityName;
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
  const request = await fetch(queryURL);
  const weatherData = await request.json();
  console.log(weatherData);
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* <h1 className={styles.mainHeader}>Weather App</h1> */}
        <div className={styles.mainWrapper}>
          <WeatherCard
            city={city}
            currentTemp={weatherData.main.temp}
            highTemp={weatherData.main.temp_max}
            lowTemp={weatherData.main.temp_min}
            cloudiness={weatherData.clouds.all}
            humidity={weatherData.main.humidity}
            weatherType={weatherData.weather[0].main}
            windspeed={weatherData.wind.speed}
          />
        </div>
      </main>
    </div>
  );
}
