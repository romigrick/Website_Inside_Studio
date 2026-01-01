import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Inicialize com o seu ID de Medição (Measurement ID)
    ReactGA.initialize("G-R6Z5T8QJDD");
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default RouteChangeTracker;