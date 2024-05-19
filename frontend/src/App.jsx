import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import "./App.css";
import { useEffect, useState } from "react";
import MainContext from "./context/context";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  });
  }, []);
  const contextData = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
};

export default App;
