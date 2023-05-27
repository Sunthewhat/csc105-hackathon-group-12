function Reviews_user() {
  return (
    <>
      <div>
        <style>
          {`
            .app-card-review{
                background-color: white;
                width:80%;
                height: fit-to-content;
                border-radius: 10px;
                margin-top: 30px;
            }

            

            
            `}
        </style>
        <div className="app-card-review">
          <div class="content" style={{ display: "flex", padding:"20px 20px 20px 20px" }}>
            <div className="image" style={{width: "52px", height:"52px", backgroundColor: "white", borderRadius:"360px"}}>
              <img
                src="https://www.svgrepo.com/show/437116/person-circle.svg"
                style={{ width: "52px" }}
                alt="logo"></img>
            </div>
            <div class="details" style={{marginLeft:"10px", fontSize:"18px", color:"#096584", fontWeight:"bold"}}>
              <p>BABEGONZ</p>
            </div>
          </div>
          <div className="reviews-info" style={{marginLeft: "80px", marginTop:"-50px", paddingBottom:"10px"}}>
            <div className="header-reviews" style={{fontSize:"18px", fontWeight:"bold", marginTop:"30px"}}>
                <p>This place is XXXXXXXX</p>
            </div>
            <div className="text-des-review">
                <p>This place is XXXXXXCCCCCCCCCCCCCCCXX</p>
            </div>
          </div>
          <div className="seeing-photo">
            <button
                className="image-btn"
                type="submit"
                value="Submit"
                >
                    View Photos
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reviews_user;
