function GuideCard() {
  return (
    <>
      <style>
        {`

        .edit-btn{
          background-color: #E31717;
          opacity: 0.7;
          width: 100px;
          color: white;
          font-weight: bold;
          font-size: 14px;
          border: none;
          padding: 10px;
          border-radius: 20px;
          cursor: pointer;
          align-self: center;
        }
          @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap');

*, *:after, *:before {
	box-sizing: border-box;
}


.card-list {
	width: 70%;
	max-width: 400px;
}

.card {
	background-color: #F9F9F9  ;
	box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	overflow: hidden;
	padding: 1.25rem;
	position: relative;
	transition: .15s ease-in;
	
	&:hover, &:focus-within {
		box-shadow: 0 0 0 2px #16C79A, 0 10px 60px 0 rgba(#000, .1);
			transform: translatey(-5px);
	}
}

.card-image {
	border-radius: 10px;
	overflow: hidden;
}

.card-header {
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	a {
		font-weight: 600;
		font-size: 1.375rem;
		line-height: 1.25;
		padding-right: 1rem;
		text-decoration: none;
		color: inherit;
		will-change: transform;
		&:after {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
		}
	}	
}


.card-footer {
	margin-top: 1.25rem;
	border-top: 1px solid #ddd;
	padding-top: 1.25rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}

.card-meta {	
	display: flex;
	align-items: center;
	color: #787878;
	&:first-child:after {
		display: block;
		content: "";
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: currentcolor;
		margin-left: .75rem;
		margin-right: .75rem;
	}
	svg {
		flex-shrink: 0;
		width: 1em;
		height: 1em;
		margin-right: .25em;
	}
}
        `}
      </style>
      <div
        className="card-deatail"
        style={{ display: "flex", justifyContent: "center", marginBottom:"30px" }}>
        <div class="card-list">
          <article class="card">
            <div class="card-header" style={{ display: "flex" }}>
              <h1 style={{ color: "#E89C31" }}>Time to go!</h1>
              <div
                className="card-date"
                style={{
                  height: "70px",
                  width: "70px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "100px",
                  textAlign: "center",
                }}>
                <h1 style={{ fontSize: "12px" }}>Day :</h1>
                <h1 style={{ marginTop: "-10px" }}>1</h1>
              </div>
            </div>

            <div class="card-detail">
              <p>
                To get to Patagonia from outside of Chile and Argentina, you
                need to fly into either Santiago or Buenos Aires and then take a
                connecting flight down to Patagonia.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-meta card-meta--date">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  display="block"
                  id="Calendar">
                  <rect x="2" y="4" width="20" height="18" rx="4" />
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M2 10h20" />
                </svg>
                Jun 24, 2003
              </div>
              <div className="edit-card">
                <button
                  className="edit-btn"
                  type="submit"
                  value="Submit">
                  Edit
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div
        className="card-deatail"
        style={{ display: "flex", justifyContent: "center"}}>
        <div class="card-list">
          <article class="card">
            <div class="card-header" style={{ display: "flex" }}>
              <h1 style={{ color: "#E89C31" }}>Go to time!</h1>
              <div
                className="card-date"
                style={{
                  height: "70px",
                  width: "70px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "100px",
                  textAlign: "center",
                }}>
                <h1 style={{ fontSize: "12px" }}>Day :</h1>
                <h1 style={{ marginTop: "-10px" }}>2</h1>
              </div>
            </div>

            <div class="card-detail">
              <p>
                To get to Patagonia from outside of Chile and Argentina, you
                need to fly into either Santiago or Buenos Aires and then take a
                connecting flight down to Patagonia.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-meta card-meta--date">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  display="block"
                  id="Calendar">
                  <rect x="2" y="4" width="20" height="18" rx="4" />
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M2 10h20" />
                </svg>
                Jun 25, 2003
              </div>
              <div className="edit-card">
                <button
                  className="edit-btn"
                  type="submit"
                  value="Submit">
                  Edit
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
export default GuideCard;
