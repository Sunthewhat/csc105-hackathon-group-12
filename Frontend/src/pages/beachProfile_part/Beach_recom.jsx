function Beach_recom() {

    const location ={
        slogan: "ISLAND OF PRISTINE BEAUTY",
    }
    const location_activities = {
        bananaboat: 1,
        jetski: 0,
        paramotor: 1,
        diving: 1,
        sailing: 1,
    }



  return (
    <>
      <style>
        {`
        {/* html, body {
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url("https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/02/shutterstock_232532110.jpg");
            background-repeat: no-repeat;
            background-size: 1920px 100vh;
          } */}

          .review-btn{
            background-color: #E89C31;
            width: 200px;
            height: 50px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            padding: 10px;
            border-radius: 100px;
            cursor: pointer;
            margin-bottom: 300px;
        }

        .app{
            display: flex;
            width: 90%;
            position: absolute;
            margin-top: 100px;
            margin-left: 50px;
            height:83vh;
        }
        
        .card{
            background-color: white;
            width: 190px;
            height: 250px;
            border-radius: 20px;
            box-shadow: 1px 1px 20px 0px black; 
        }

        .pic-activities{
            display: flex;
            justify-content: center;
        }
        .pic-div{
            width: 160px;
            height: 160px;
            border-radius: 10px;
            margin-top: 15px;
        }

        .text-act{
            text-align: center;
        }

        .text{
            color: white;
            font-size: 24px;
        }

        .text-recom{
            display: flex;
            justify-content: flex-end;
        }

        .recommendation{
            width: 100%;
        }
        `}
      </style>
      <div className="app">
        <div className="review-butn"></div>
        <div className="recommendation">
          <div className="text-recom">
            <div className="btn-part">
                <button
              className="review-btn"
              type="submit"
              value="Submit"
              >
              Write Your Review
            </button>
            </div>
          </div>
          <div className="activity-recom">
            <div className="text">
                <h1>{location.slogan}</h1>
            </div>
            <div className="activities_card">
                <div className="card">
                    <div className="pic-activities">
                        <img className="pic-div" src="https://cdn.getyourguide.com/img/tour/637fbe8a9b1ec.png/146.jpg" alt="jetski"></img>
                    </div>
                    <div className="text-act">
                        <h3>Jetski</h3>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Beach_recom;
