function GuideCard_new(props) {
  return (
    <>
      <style>
        {`

        .edit-btn{
          background-color: green;
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
      <div className="card-deatail" style={{display:"flex", justifyContent: "center"}}>
        <div class="card-list">
          <article class="card">
            <form>
              <div class="card-header-n">
                <h1 style={{ color: "#E89C31" }}>Add your heading</h1>
                <input
                  className="gp-input"
                  type="text"
                  placeholder="Type your heading"
                  style={{
                    width: "90%",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                  required
                />
                <h3 style={{ color: "#E89C31" }}>Plan description</h3>
                <input
                  className="gp-input"
                  type="text"
                  placeholder="Type your description here"
                  style={{
                    width: "90%",
                    height: "50px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                  required
                />
                <div className="card-date" style={{marginTop:"20px"}}>
                  <label for="day">Choose a day:</label>
                  <select name="day" id="day">
                    <option value="day1">1</option>
                    <option value="day2">2</option>
                    <option value="day3">3</option>
                    <option value="day4">4</option>
                    <option value="day5">5</option>
                  </select>
                  <br></br>
                </div>
              </div>
              <div class="card-footer">
                <div class="card-meta card-meta--date">
                  <input type="date" id="date"></input>
                </div>
                <div className="edit-card">
                  <button className="edit-btn" type="submit" value="Submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </div>
    </>
  );
}
export default GuideCard_new;
