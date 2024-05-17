import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import "./home.css";
import Featured from "../../../components/site/Featured/Featured";
import Carousel from "../../../components/site/Carousel/Carousel";
import Timer from "../../../components/site/Timer/Timer";
import Subscribe from "../../../components/site/Subscribe/Subscribe";
import Logo from "../../../components/site/Logo/Logo";
import Footer from "../../../layout/site/Footer/footer";
const Home = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Featured/>
      <Carousel/>
      <Timer/>
      <Carousel/>
      <Subscribe/>
      <Logo/>
      
      <Footer/>
    </>
  );
};

export default Home;
