import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import Table from "../../../components/admin/Table/Table";
const Dashboard = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>{<Table items={data} />}</div>;
    </>
  );
};

export default Dashboard;
