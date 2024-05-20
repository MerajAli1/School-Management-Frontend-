import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const loginToken = JSON.parse(localStorage.getItem("token"));
    console.log(loginToken, "LOGIN TOKEN");
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/admin/dashboard",
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
        }
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error, "ERROR OCCURED");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <button
        className="btn btn-danger btn-lg"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        LOGOUT
      </button>
      <div>{data}</div>;
    </>
  );
};

export default Home;
