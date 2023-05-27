import React, { useState } from 'react';

function Beach_info() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleGuidePlaneClick = () => {
    setMenuVisible(true);
  };

  return (
    <>
      <style>{`
        .img-show {
          width: 700px;
          height: 500px;
          border-radius: 20px;
        }
        .location-name {
          margin-top: -40px;
        }
        .location-name h1 {
          font-size: 38px;
          color: #2A8A92;
          font-weight: bold;
        }
        .info-part {
          margin-left: 40px;
        }
        .guide-plane-btn {
          background-color: #2A8A92;
          width: 200px;
          height: 50px;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border: none;
          padding: 10px;
          border-radius: 100px;
          cursor: pointer;
          margin-top: 20px;
        }
        .guide-plan-btn-mom {
          display: flex;
          justify-content: flex-end;
        }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: ${menuVisible ? 'flex' : 'none'};
          align-items: center;
          justify-content: center;
        }
        .menu-content {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
        }
      `}
      </style>
      <div className="app">
        <div className="gallery-part" style={{ width: "60%", height: "40%" }}>
          <img className="img-show" src="https://c4.wallpaperflare.com/wallpaper/190/269/279/maya-bay-ko-phi-phi-leh-in-thailand-boat-exotic-desktop-wallpaper-hd-2560%C3%971600-wallpaper-preview.jpg" alt="Beach"></img>
        </div>
        <div className="info-part">
          <div className="general-location-info">
            <div className="location-name">
              <h1>KOH PHI PHI LE</h1>
            </div>
            <div className="location-des">
              <p>Phi Phi Leh is an uninhabited island that lies 1.5 km off the southernmost tip of Phi Phi Don. The island features stunning vertical cliffs capped with green foliage that give way to small sandy beaches and tropical coral seas. Most visitors find their way around Phi Phi Leh on an organised Phi Phi boat tour. However, you can rent a longtail boat if you prefer a customised trip. Find more about some of this beautiful island’s highlights below.</p>
            </div>
          </div>
          <div className="guide-plan-btn-mom">
            <div className="btn-part">
              <button
                className="guide-plane-btn"
                type="submit"
                value="Submit"
                onClick={handleGuidePlaneClick}
              >
                Guide Plane
              </button>
            </div>
          </div>
        </div>
      </div>
      {menuVisible && (
        <div className="menu-overlay">
          <div className="menu-content">
            {/* Add your menu content here */}
            <h3>Guide Plane Menu</h3>
            <p>This is the pop-up menu content.</p>
            <button onClick={() => setMenuVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Beach_info;
