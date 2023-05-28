import { useEffect, useState } from "react";
import api from "../axios";
import { Box, Typography } from "@mui/material";
import jwt_decode from "jwt-decode";
// import { Cookie, Margin } from "@mui/icons-material";
// import Popup from "../components/popup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function Reviews_user(props) {
  const [open, setOpen] = useState(false);
  const [alter, setAlter] = useState(false);
  const [username, setUsername] = useState();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [isDelete, setDelete] = useState(false);
  const jwt_token = getCookie("jwt_token");
  const user_id = jwt_decode(jwt_token).userId;
  const fetchProfile = async () => {
    try {
      // console.log(props.id);
      const data = await api.get(`/getuser/${props.user_id}`);
      setUsername(data.data.data[0].username);
      // username = data.data.username;
    } catch (error) {
      throw error;
    }
  };
  const handleSubmit = async () => {
    await api.patch(`/review/${props.id}`, {
      header: title,
      text: detail,
    });
    setHeader(title);
    setText(detail);
    handleClose();
  };

  const handleClickAlter = () => {
    setAlter(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setAlter(false);
  };
  const handleDelete = async () => {
    await api.delete(`/review/${props.id}`);
    setDelete(true);
    handleClose();
  };

  // console.log(user_id);
  // console.log(props.user_id);
  const renderButton = (id) => {
    if (user_id == id) {
      return (
        <div>
          <button
            style={{
              color: "black",
              margin: "10px",
              backgroundColor: "#FFBF00",
              border: "none",
              width:"60px",
              height:"30px",
              borderRadius:"20px",
            }}
            type="submit"
            value="Submit"
            onClick={() => {
              handleClickOpen();
            }}>
            Edit
          </button>
          <button
            style={{
              color: "red",
              margin: "10px",
              backgroundColor: "white",
              border: "solid 2px red",
              width:"60px",
              height:"30px",
              borderRadius:"20px",
            }}
            type="submit"
            value="Submit"
            onClick={() => {
              handleClickAlter();
            }}>
            Delete
          </button>
          <div>
            <Dialog
              open={alter}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
              <DialogTitle id="alert-dialog-title">
                {"Warning!!!!!!!!!!!!!!!!!!!!!!!!!!!"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure??
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleDelete} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Subscribe</DialogTitle>
              <DialogContent>
                <DialogContentText></DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Header"
                  type="header"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Text"
                  type="Text"
                  value={detail}
                  onChange={(e) => {
                    setDetail(e.target.value);
                  }}
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      );
    } else return <Box marginTop={"10px"}></Box>;
  };
  useEffect(() => {
    fetchProfile();
    // console.log(props.text);
    setDetail(props.text.toString() + "");
    setTitle(props.header.toString() + "");
    setHeader(props.header.toString() + "");
    setText(props.text.toString() + "");
  }, []);

  return (
    <>
      <div style={{ display: isDelete == true ? "none" : "" }}>
        <style>
          {`
            .app-card-review{
                background-color: white;
                width:80%;
                height: fit-to-content;
                border-radius: 10px;
                margin-top: 30px;
                margin-bottom: 30px;
            }

            .image-btn{
                background-color: #2A8A92;
                width: 150px;
                color: white;
                font-weight: bold;
                font-size: 14px;
                border: none;
                padding: 10px;
                border-radius: 100px;
                cursor: pointer;
                margin-top: 25px;
                align-self: center;
                margin-bottom: 20px;
            }
            `}
        </style>
        <div className="app-card-review">
          <div
            class="content"
            style={{ display: "flex", padding: "20px 20px 20px 20px" }}>
            <div
              className="image"
              style={{
                width: "52px",
                height: "52px",
                backgroundColor: "white",
                borderRadius: "360px",
              }}>
              <img
                src="https://www.svgrepo.com/show/437116/person-circle.svg"
                style={{ width: "52px" }}
                alt="logo"></img>
            </div>
            <div
              class="details"
              style={{
                marginLeft: "10px",
                fontSize: "18px",
                color: "#096584",
                fontWeight: "bold",
              }}>
              <Typography
                paddingTop={"10px"}
                fontSize={"100%"}
                fontWeight={"bold"}>
                {username}
              </Typography>
            </div>
          </div>
          <div
            className="reviews-info"
            style={{ marginLeft: "80px", marginTop: "-50px" }}>
            <div
              className="header-reviews"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "30px",
                paddingTop: "0px",
              }}>
              <p>{header}</p>
            </div>
            <div className="text-des-review" style={{ marginTop: "-10px" }}>
              <p>{text}</p>
            </div>
          </div>
          <div
            className="seeing-photo"
            style={{
              marginTop: "-20px",
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "30px",
            }}>
            {renderButton(props.user_id)}
          </div>
        </div>
      </div>
    </>
  );
}
export default Reviews_user;
