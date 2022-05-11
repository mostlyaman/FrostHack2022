import React from "react";

export const Prizes = (props) => {
  return (
    // {/* container */}
    <div className="container-fluid" style={{ paddingTop: "4em" }}>
      {/* row */}
      <div className="row tracks">
        {/* section title */}
        <div className="section-title">
          <h5 className="title">
            <span style={{ color: "#DADADA" }}>Previous</span>{" "}
            <span style={{ color: "#dd0a37" }}>Prizes</span>
          </h5>
        </div>
        {/* <div className="col-md-8 col-md-offset-2 text-center"> */}
          {/* about content */}
          {/* <div className="about-content">
            <p className="changecolor">
              ₹1,50,000 Cash Prize and goodies worth 25k to be won!
            </p>
          </div> */}
          {/* /about content */}
        {/* </div> */}
        {/* Prize Cards */}
        <div id="cards_landscape_wrap-2">
          <div className="container" style={{ backgroundColor: "#0F131C" }}>
            <div className="row">
              {/*Prize*/}
              <div
                className={
                  props.isArchive === "true"
                    ? "col-xs-6 col-sm-3 col-md-3 col-lg-3"
                    : "col-xs-12 col-sm-6 col-md-4 col-lg-4"
                }
                style={{ height: "400px" }}
                id="cash-prize-r1-1"
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="img/gold.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h3 className="changecolor">1st Prize</h3>
                      <h6 className="changecolor">₹20,000 cash + ₹30,000 worth Hoverrobotics vouchers</h6>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              {/*/Prize*/}
              {/*Prize*/}
              <div
                className={
                  props.isArchive === "true"
                    ? "col-xs-6 col-sm-3 col-md-3 col-lg-3"
                    : "col-xs-12 col-sm-6 col-md-4 col-lg-4"
                }
                style={{ height: "400px" }}
                id="cash-prize-r1-2"
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="img/silver.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h3 className="changecolor">2nd Prize</h3>
                      <h6 className="changecolor">₹15,000 cash + ₹20,000 worth Hoverrobotics voucher</h6>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              {/*/Prize*/}
              {/*Prize*/}
              <div
                className={
                  props.isArchive === "true"
                    ? "col-xs-6 col-sm-3 col-md-3 col-lg-3"
                    : "col-xs-12 col-sm-6 col-md-4 col-lg-4"
                }
                style={{ height: "400px" }}
                id="cash-prize-r1-3"
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="img/bronze.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h3 className="changecolor">3rd Prize</h3>
                      <h6 className="changecolor">₹10,000 cash + ₹10,000 worth Hoverrobotics voucher</h6>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              {/*/Prize*/}
              {/*Prize*/}
                {/* <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="img/girl.png" alt="" />
                    </div>
                    <div className="text-container">
                      <h3 className="changecolor">Best Girls Team</h3>
                      <h5 className="changecolor">₹7,000</h5>
                      <p />
                    </div>
                  </div>
                </div> */}
              
              {/*/Prize*/}
              {/* Prize*/}
              {/* <div class={
                  props.isArchive === "true"
                    ? "col-xs-6 col-sm-3 col-md-3 col-lg-3"
                    : "col-xs-12 col-sm-6 col-md-4 col-lg-4"
                } id = "cash-prize-r1">
                    </div> */}
              {/*/Prize */}
              {/*Prize*/}
              {/*  */}
              {/*/Prize*/}
              {/*Prize*/}
              
              <div
                className={
                  props.isArchive === "true"
                    ? "col-xs-6 col-sm-3 col-md-3 col-lg-3"
                    : "col-xs-12 col-sm-6 col-md-4 col-lg-4"
                }
                style={{ height: "400px" }}
                id="cash-prize-r1-3"
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="img/bronze.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h3 className="changecolor">4th Prize</h3>
                      <h6 className="changecolor">₹10,000 worth Hoverrobotics voucher</h6>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  props.isArchive === "true"
                    ? "col-xs-6 col-sm-3 col-md-3 col-lg-3"
                    : "col-xs-12 col-sm-6 col-md-4 col-lg-4"
                }
                style={{ height: "400px" }}
                id="cash-prize-r1-3"
              >
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src="img/bronze.jpg" alt="" />
                    </div>
                    <div className="text-container">
                      <h3 className="changecolor">5th Prize</h3>
                      <h6 className="changecolor">₹10,000 worth hoverrobotics voucher</h6>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              {/*/Prize*/}
            </div>
          </div>
        </div>
        {/* /Prize Cards */}
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
};
