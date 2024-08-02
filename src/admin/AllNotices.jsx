import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api";
import axios from "axios";
import { Button } from "@mui/material";
import NoticeUpdateModal from "./NoticeUpdateModal";
const AllNotices = () => {
  const [allNotice, setAllNotice] = useState([]);
  const [refresh, setRefresh] = useState(false);
  //GET ALL NOTICES FUNCTION
  const getAllNotices = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(`${baseURL}/api/v1/admin/notice`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data, "NOTICES");
      setAllNotice(res.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  //Delete Notice
  const deleteNotice = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(`${baseURL}/api/v1/admin/notice/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log("error ", error);
    }
    setRefresh(!refresh);
  };

  //USEEFFECT TO GET ALL NOTICES
  useEffect(() => {
    getAllNotices();
  }, [refresh]);
  return (
    <>
      <div className="container-fluid">
        <div>
          <h1>All Notices</h1>
        </div>
        <div className="row">
          {/* //Mapping through all the notices */}
          {allNotice?.map((e, i) => (
            <div className="card mt-5" key={i}>
              <div className="card-header">
                <b>{e.title}</b>
                <span style={{ marginLeft: "auto", display: "block" }}>
                  Dated: {new Date(e.date).toISOString().split("T")[0]}
                </span>
              </div>
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.details}</p>
                {/* <Button className="me-3" variant="contained">
                    update
                </Button> */}
                <NoticeUpdateModal
                  id={e._id}
                  titles={e.title}
                  detail={e.details}
                  dates={e.date}
                />
                <Button
                  onClick={() => deleteNotice(e._id)}
                  color="error"
                  variant="contained"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllNotices;
