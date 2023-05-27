function Location_review() {
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
            }

            //rating
            .height-100{
    height:100vh;
}

.card{
    width:380px;
    border:none;
    height:280px;
}

.ratings{
    margin-right:10px;
}

.ratings i{
    
    color:#cecece;
    font-size:32px;
}

.rating-color{
    color:#fbc634 !important;
}

.review-count{
    font-weight:400;
    margin-bottom:2px;
    font-size:24px !important;
}

.small-ratings i{
  color:#cecece;   
}

.review-stat{
    font-weight:300;
    font-size:18px;
    margin-bottom:2px;
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
              <h1>KOH PHI PHI LE</h1>
            </div>
          </div>
          <div className="overall">
            <div class="height-100 container d-flex justify-content-center align-items-center">
              <div class="card p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <h5 class="review-count">12 Reviews</h5>
                </div>

                <div class="mt-5 d-flex justify-content-between align-items-center">
                  <h5 class="review-stat">Cleanliness</h5>
                  <div class="small-ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>

                <div class="mt-1 d-flex justify-content-between align-items-center">
                  <h5 class="review-stat">Approachability of SLT</h5>
                  <div class="small-ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>

                <div class="mt-1 d-flex justify-content-between align-items-center">
                  <h5 class="review-stat">Front Office</h5>
                  <div class="small-ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>

                <div class="mt-1 d-flex justify-content-between align-items-center">
                  <h5 class="review-stat">CPD</h5>
                  <div class="small-ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                  </div>
                </div>

                <div class="mt-1 d-flex justify-content-between align-items-center">
                  <h5 class="review-stat">Pastrol</h5>
                  <div class="small-ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>

                <div class="mt-1 d-flex justify-content-between align-items-center">
                  <h5 class="review-stat">Office Space</h5>
                  <div class="small-ratings">
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star rating-color"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="write-reviews-part"></div>
        </div>
      </div>
    </>
  );
}
export default Location_review;
