import axios from "axios";
import { useState, createContext, useEffect } from "react";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://dummyapi.io/data/v1/post", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "633533f8f02614e5a07f8857",
        },
      });
      setRes(response.data.data);
    };
    getData();
  },[]);

  return (
    <DataContext.Provider value={{ res }}>
      {children}
    </DataContext.Provider>
  );
};
