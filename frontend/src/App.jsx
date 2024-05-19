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
    axios.get('https://example.com/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Response error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request
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
