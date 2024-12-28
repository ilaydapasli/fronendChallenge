import React from "react";
import "../css/Profile.css";
import profimg from "../img/Profile.png";
import Card from "./Card";
function Profile() {
  return (
    <div
      className="profile-bg"
      style={{ backgroundColor: "#4731D3", width: "100%" }}
    >
      <h1>Profile</h1>
      <div className="profile-content">
        <div className="basic-info">
          <h3 style={{ color: "#fff" }}>Basic ınformation</h3>
          <p>
            <strong style={{ color: "#CBF281" }}>Doğum tarihi:</strong>{" "}
            24.03.1996
          </p>
          <p>
            <strong>İkamet Şehri:</strong> Ankara
          </p>
          <p>
            <strong>Eğitim Durumu:</strong> Hacettepe Üniv. Biyoloji Lisans,
            2016
          </p>
          <p>
            <strong>Tercih Ettiği Rol:</strong> Frontend, UI
          </p>
          <div className="profile-info"></div>
        </div>
        <div>
          {" "}
          <img
            style={{ width: "300px", height: "290.68px", borderRadius: "10px" }}
            src={profimg}
            alt=""
          />
        </div>
        <div className="about-box">
          <h3>About Me</h3>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet <br />
            consectetur adipisicing elit. <br /> Veniam aut, odit laborum
            aliquam <br /> voluptatum nisi mollitia.
            <br />
            Mnima accusamus ratione soluta <br /> aperiam sit voluptate? Dicta
            quod <br /> deserunt quam temporibus <br />
            cumque magnam!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
