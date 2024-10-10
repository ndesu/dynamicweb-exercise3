import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrella,
  faCloud,
  faSun,
  faSmog,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Rain":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Mist":
      return <FontAwesomeIcon icon={faSmog} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    default:
      return <FontAwesomeIcon icon={faSun} />;
  }
}
