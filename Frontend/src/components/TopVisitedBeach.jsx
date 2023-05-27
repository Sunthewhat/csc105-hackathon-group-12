function TopVisitedBeach(props) {
  return (
    <>
      <style>
        {`
        .card{
            background-color: white;
            width: 350px;
            height: 230px;
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
    <div className="activities_card">
        <div className="card">
            <div className="pic-activities">
                <img className="pic-div" src={props.cover_url} alt="jetski"></img>
            </div>
                <div className="text-act">
                    <h3>{props.name}</h3>
                </div>
        </div>
    </div>
    </>
  );
}

export default TopVisitedBeach;