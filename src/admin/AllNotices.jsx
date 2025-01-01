import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api";
import axios from "axios";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import NoticeUpdateModal from "./NoticeUpdateModal";
import Loader from "../Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllNotices = () => {
  const [allNotice, setAllNotice] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [noticeToDelete, setNoticeToDelete] = useState(null);

  //GET ALL NOTICES FUNCTION
  const getAllNotices = async () => {
    setLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(`${baseURL}/api/v1/admin/notice`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllNotice(res.data);
    } catch (error) {
      console.log("error ", error);
    }
    setLoading(false);
  };

  //Delete Notice
  const deleteNotice = async (id) => {
    setDeleteLoading((prev) => ({ ...prev, [id]: true }));
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(`${baseURL}/api/v1/admin/notice/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Notice Deleted Successfully");
      setRefresh(!refresh);
    } catch (error) {
      toast.error("Error Deleting Notice");
      console.log("error ", error);
    } finally {
      setDeleteLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleDeleteClick = (id) => {
    setNoticeToDelete(id);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setNoticeToDelete(null);
  };

  const handleDialogConfirm = () => {
    if (noticeToDelete) {
      deleteNotice(noticeToDelete);
    }
    handleDialogClose();
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
                <NoticeUpdateModal
                  id={e._id}
                  titles={e.title}
                  detail={e.details}
                  dates={e.date}
                />
                <Button
                  onClick={() => handleDeleteClick(e._id)}
                  color={"error"}
                  sx={{ mt: 2 }}
                  variant="contained"
                  disabled={deleteLoading[e._id]}
                >
                  {deleteLoading[e._id] ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "Delete"
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
      >
        <DialogTitle>{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this notice?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            No
          </Button>
          <Button onClick={handleDialogConfirm} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default AllNotices;
