import React, { useEffect, useState } from 'react'
import { baseURL } from '../api/api';
import axios from 'axios';
import Loader from '../Loader/Loader';

const TeacherAllNotices = () => {
    const [loading, setLoading] = useState(false);
    const [allNotice, setAllNotice] = useState([]);
    const allNotices = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      setLoading(true);
      try {
        const res = await axios.get(`${baseURL}/api/v1/teacher/notices`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllNotice(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  
    useEffect(() => {
      allNotices();
    }, []);
  return (
    <>
    <div className="container-fluid">
        <div>
          <h1>All Notices</h1>
        </div>
        <div className="row">
          {loading ? <Loader /> : null}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TeacherAllNotices