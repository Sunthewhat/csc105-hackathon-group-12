import { useEffect, useState } from "react";
import Reviews_user from "./Reviews_user";
import api from "../axios";
import { Stack } from "@mui/material";
function Location_review(props) {
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [review, setReview] = useState([]);

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const fetchReview = async () => {
    try {
      const data = await api.get(`/review/${props.location_id}`);
        setReview(data.data.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchReview();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/review/${props.location_id}`, { header, text });
      setHeader("");
      setText("");
      fetchReview();
    } catch (error) {
      console.log("Post review Error: ");
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
            .text-head{
                font-size: 16px;
                color: #014767;
            }

            .location-name-head{
                color: #014767;
                font-size: 22px;
                margin-top: -20px;
            }

            .reviews-body{
                margin-left: 50px;
                padding-top: 50px;
                width: 40%;
            }

            .location-reviews-app{
                display: flex;
            }

            .write-reviews-part{
                width: 60%;
            }

            //post
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
            *{
                margin-top: 50px;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }

            .container{
                width: 80%;
                height: 50%;
                overflow: hidden;
                background: #fff;
                border-radius: 10px;
                transition: height 0.2s ease;
                box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
                margin-top: 80px;
            }
            .container.active{
                height: 590px;
            }
            .container .wrapper{
                width: 200%;
                display: flex;
            }
            .container .wrapper section{
                width: 100%;
                background: #fff;
            }
            .container img{
                cursor: pointer;
            }
            .container .post{
                transition: margin-left 0.18s ease;
            }
            .container.active .post{
                margin-left: -500px;
            }
            .post header{
                font-size: 22px;
                font-weight: 600;
                padding: 17px 0;
                text-align: center;
                border-bottom: 1px solid #bfbfbf;
            }
            .post form{
                margin: 20px 25px;
            }
            .post form .content,
            .audience .list li .column{
                display: flex;
                align-items: center;
            }
            .post form .content img{
                cursor: default;
                max-width: 52px;
            }
            .post form .content .details{
                margin: -3px 0 0 12px;
            }
            form .content .details p{
                font-size: 17px;
                font-weight: 500;
            }
            .content .details .privacy{
                display: flex;
                height: 25px;
                cursor: pointer;
                padding: 0 10px;
                font-size: 11px;
                margin-top: 3px;
                border-radius: 5px;
                align-items: center;
                max-width: 98px;
                background: #E4E6EB;
                justify-content: space-between;
            }
            .details .privacy span{
                font-size: 13px;
                margin-top: 1px;
                font-weight: 500;
            }
            .details .privacy i:last-child{
                font-size: 13px;
                margin-left: 1px;
            }
            form :where(textarea, button){
                width: 100%;
                outline: none;
                border: none;
            }
                form textarea{
                resize: none;
                font-size: 18px;
                margin-top: 30px;
                min-height: 30px;
            }
            form textarea::placeholder{
                color: #858585;
            }
            form textarea:focus::placeholder{
                color: #b3b3b3;
            }
            form :where(.theme-emoji, .options){
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .theme-emoji img:last-child{
                max-width: 24px;
            }
            form .options{
                height: 57px;
                margin: 15px 0;
                padding: 0 15px;
                border-radius: 7px;
                border: 1px solid #B9B9B9;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }
            form .options :where(.list, li),
            .audience :where(.arrow-back, .icon, li .radio){
                display: flex;
                align-items: center;
                justify-content: center;
            }
            form .options p{
                color: #595959;
                font-size: 15px;
                font-weight: 500;
                cursor: default;
            }

            form .options .list{
                list-style: none;
            }
            .options .list li{
                height: 42px;
                width: 42px;
                margin: 0 -1px;
                cursor: pointer;
                border-radius: 50%;
            }

            .options .list li:hover{
                background: #f0f1f4;
            }
            .options .list li img{
                width: 23px;
            }
            form button{
                height: 53px;
                color: #fff;
                font-size: 18px;
                font-weight: 500;
                cursor: pointer;
                color: #BCC0C4;
                cursor: no-drop;
                border-radius: 7px;
                background: #e2e5e9;
                transition: all 0.3s ease;
            }
            form textarea:valid ~ button{
                color: #fff;
                cursor: pointer;
                background: #096584;
            }
            form textarea:valid ~ button:hover{
                background: #096584;
            }
            .container .audience{
                opacity: 0;
                transition: opacity 0.12s ease;
            }
            .container.active .audience{
                opacity: 1;
            }

        `}
      </style>
      <div className="location-reviews-app">
        <div className="reviews-body">
          <div className="head-com">
            <div className="text-head">
              <h1>REVIEWS</h1>
            </div>
            <div className="location-name-head">
              <h1>{props.location}</h1>
            </div>
          </div>
          <div className="overall"></div>
        </div>
        <div className="write-reviews-part">
          <div
            className="post-reviews"
            style={{ display: "flex", flexDirection: "column" }}>
            <div class="container">
              <div class="wrapper">
                <section class="post">
                  <header style={{ color: "#096584" }}>Time to share!</header>
                  <form action="#">
                    <div class="content">
                      <img
                        src="https://www.svgrepo.com/show/437116/person-circle.svg"
                        alt="logo"></img>
                      <div class="details" style={{ color: "#096584" }}>
                        <p>{props.username}</p>
                      </div>
                    </div>
                    <textarea
                      placeholder="Write your reviews?"
                      spellcheck="false"
                      required
                      value={header}
                      onChange={handleHeaderChange}></textarea>

                    <input
                      className="options"
                      type="text"
                      placeholder="Add Link To Your Review"
                      style={{ width: "800px", height: "50px" }}
                      required
                      value={text}
                      onChange={handleTextChange}
                    />

                    <button onClick={handleSubmit}>POST YOUR REVIEW</button>
                  </form>
                </section>
                <section></section>
              </div>
            </div>
          </div>
          <Stack>
            {review.map((e) => {
              return <Reviews_user {...e} />;
            })}
          </Stack>
        </div>
      </div>
    </>
  );
}
export default Location_review;
