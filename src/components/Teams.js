import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Member } from "./Member";
export const Teams = (props) => {
  return (
    <div>
      {/* team */}
      <div id="team" className="section" style={{ marginTop: "10vh" }}>
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* section title */}
            <div className="section-title">
              <br />
              <br />
              <br />
              <br />
              <h3 className="title">
                <span className="changecolor">meet the</span>{" "}
                <span style={{ color: "#dd0a37" }}>Organizing Team</span>
              </h3>
            </div>
            {/* /section title */}

            <Member
              name="Deepali Singh"
              phone="2898282"
              role="Branding"
              fb="https://www.facebook.com/deepali.s11/"
            />
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /team */}
    </div>
  );
};
