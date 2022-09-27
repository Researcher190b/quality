import React, { useState, useContext, useEffect } from "react";
import qualityService from "../services/quality.service";

const QualityContex = React.createContext();
export const useQualities = () => {
  return useContext(QualityContex);
};
export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getQualities = async () => {
      try {
        const qualities = await qualityService.fetchAll();
        setQualities(qualities);
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    };
    getQualities();
  }, []);

  return (
    <QualityContex.Provider value={qualities}>
      {children}
    </QualityContex.Provider>
  );
};
