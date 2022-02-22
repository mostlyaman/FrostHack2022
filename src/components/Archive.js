import CountUp from "react-countup";
import React from "react";
export const Archive = (props) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      <div id="themes" className="section">
        {/* <h1>Previous Year Stats</h1> */}
        <div
          className="container"
          style={{ paddingTop: "4em", marginTop: "22vh" }}
        >
          {/* row */}
          <div className="row tracks">
            {/* section title */}

            <div
              id="cards_landscape_wrap-2"
              style={{ backgroundColor: "rgb(15,19,28)" }}
            >
              <div className="container">
                <div className="row">
                  {/*Prize*/}
                  <div className="section-title">
                    <h5 className="title" style={{ color: "white" }}>
                      <span>Previous  <span style={{color: "red"}}>Year Statistics</span></span>{" "}
                    </h5>
                  </div>
                  <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    id="cash-prize-r1-a"
                    style={{ padding: "10px 40px" }}
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        {/* <div className="image-box">
                        <img src="img/gold.jpg" alt="" />
                      </div> */}
                        <div className="text-container">
                          <h5
                            className="changecolor"
                            style={{ color: "white" }}
                          >
                            <CountUp start={0} end={1500} /> +
                          </h5>
                          <hr
                            style={{
                              borderTop: "6px solid white",
                              marginLeft: "10%",
                              marginRight: "10%",
                            }}
                          />
                          <h3 style={{ color: "red" }}>Participants</h3>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Prize*/}
                   {/*Prize*/}
                   <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    id="cash-prize-r1-d"
                    style={{ padding: "10px 40px" }}
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        {/* <div className="image-box">
                        <img src="img/bronze.jpg" alt="" />
                      </div> */}
                        <div className="text-container">
                          <h5
                            className="changecolor"
                            style={{ color: "white" }}
                          >
                            <CountUp start={0} end={300} /> +
                          </h5>
                          <hr
                            style={{
                              borderTop: "6px solid white",
                              marginLeft: "10%",
                              marginRight: "10%",
                            }}
                          />
                          <h3 style={{ color: "Red" }}>Colleges</h3>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Prize*/}
                  {/*Prize*/}
                  <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    id="cash-prize-r1-b"
                    style={{ padding: "10px 40px" }}
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        {/* <div className="image-box">
                        <img src="img/silver.jpg" alt="" />
                      </div> */}
                        <div className="text-container">
                          <h5
                            className="changecolor"
                            style={{ color: "white" }}
                          >
                            <CountUp start={0} end={250} /> +
                          </h5>
                          <hr
                            style={{
                              borderTop: "6px solid white",
                              marginLeft: "10%",
                              marginRight: "10%",
                            }}
                          />
                          <h3 style={{ color: "red" }}>Teams</h3>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Prize*/}
                    
                  {/*Prize*/}
                  <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    id="cash-prize-r1-c"
                    style={{ padding: "10px 40px" }}
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        {/* <div className="image-box">
                        <img src="img/bronze.jpg" alt="" />
                      </div> */}
                        <div className="text-container">
                          <h5
                            className="changecolor"
                            style={{ color: "white" }}
                          >
                            <CountUp start={0} end={4000} /> +
                          </h5>
                          <hr
                            style={{
                              borderTop: "6px solid white",
                              marginLeft: "10%",
                              marginRight: "10%",
                            }}
                          />
                          <h3 style={{ color: "Red" }}>Emails</h3>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Prize*/}
                  {/*Prize*/}
                  <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    id="cash-prize-r1-e"
                    style={{ padding: "10px 40px" }}
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        {/* <div className="image-box">
                        <img src="img/bronze.jpg" alt="" />
                      </div> */}
                        <div className="text-container">
                          <h5
                            className="changecolor"
                            style={{ color: "white" }}
                          >
                            <CountUp start={0} end={3000} /> +
                          </h5>
                          <hr
                            style={{
                              borderTop: "6px solid white",
                              marginLeft: "10%",
                              marginRight: "10%",
                            }}
                          />
                          <h3 style={{ color: "Red" }}>Messages</h3>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Prize*/}
                  {/*Prize*/}
                  <div
                    className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
                    id="cash-prize-r1-f"
                    style={{ padding: "10px 40px" }}
                  >
                    <div className="card-flyer">
                      <div className="text-box">
                        {/* <div className="image-box">
                        <img src="img/bronze.jpg" alt="" />
                      </div> */}
                        <div className="text-container">
                          <h5
                            className="changecolor"
                            style={{ color: "white" }}
                          >
                            <CountUp start={0} end={500} /> +
                          </h5>
                          <hr
                            style={{
                              borderTop: "6px solid white",
                              marginLeft: "10%",
                              marginRight: "10%",
                            }}
                          />
                          <h3 style={{ color: "Red" }}>Doubts Solved</h3>
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
          {/* row */}
          <div className="row">
            <div className="section-title">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3 className="title">
                <span style={{ color: "#DADADA" }}>Frosthack</span>{" "}
                <span style={{ color: "#dd0a37" }}>2021 Winners</span>
              </h3>
            </div>
            <section className="hero-section">
              <div className="card-grid">
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="https://devfolio.co/submissions/gofit-f48b"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/458f2c96a2194c4ea726db09de2c530d/854dda8a-d2b5-4eb7-88fe-78803bdcb6ad.png)",
                    }}
                  />
                  <div className="card__content changecolor">
                    <p className="card__category changecolor">1st prize</p>
                    <h3 className="card__heading changecolor">Project GoFit</h3>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="https://devfolio.co/submissions/covicoin-74c9"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/c793422146584da2a9509d9c0f39a4a5/aedef7f2-04ea-4915-a898-2f8300fe5dd4.png)",
                    }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">2nd Prize</p>
                    <h3 className="card__heading changecolor">
                      Project Covicoin
                    </h3>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="http://frosthacksubmission.pythonanywhere.com/details/46?"
                >
                  <div
                    className="card__background"
                    style={{ backgroundImage: "url(img/ponder.png)" }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">3rd Prize</p>
                    <h3 className="card__heading changecolor">
                      Project Ponder
                    </h3>
                  </div>
                </a>
                <a
                  className="winners_card"
                  href="https://devfolio.co/submissions/digiq-06b4"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/c212b8e42495443b80dde754bdd55869/b6244c4d-d11e-4138-82c5-038c33cc6aed.jpeg)",
                    }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">
                      Best Covid Hack
                    </p>
                    <h3 className="card__heading changecolor">Project DigiQ</h3>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="https://devfolio.co/submissions/uvc-vehicle-sanitizer-2cb9"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/d616200e2a804afd8764360824726aa1/c7d7eb79-1cac-4372-97f8-9a84ba790727.jpeg)",
                    }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">
                      Outstanding Female Submission
                    </p>
                    <h3 className="card__heading changecolor">
                      Project Vehicle Sanitizer
                    </h3>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="https://devfolio.co/submissions/hriday-ad19"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/6606bee2d20b46b0a18b57ad7fb3bc63/863bc909-ccae-486a-ba1a-9c30de6a9489.jpeg)",
                    }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">
                      Special Mention
                    </p>
                    <h3 className="card__heading changecolor">
                      Project Hriday
                    </h3>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="https://devfolio.co/submissions/edulocity-bb7c"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/c0e049c6237a463b89c3b98b125eb68f/5908a983-8d40-4012-b879-27f18c4a3a39.jpeg)",
                    }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">
                      Special Mention
                    </p>
                    <h3 className="card__heading changecolor">
                      Project Edulocity
                    </h3>
                  </div>
                </a>
                <a
                  rel="noreferrer"
                  className="winners_card"
                  href="https://devfolio.co/submissions/guitar-a8b8"
                >
                  <div
                    className="card__background"
                    style={{
                      backgroundImage:
                        "url(https://assets.devfolio.co/hackathons/efcf40b9f9b043f38f82fa2d03a0154d/projects/78e29ee92e834576906e12459c78a4da/1c4a203b-6d52-41de-b037-aba6c0eb6f14.png)",
                    }}
                  />
                  <div className="card__content">
                    <p className="card__category changecolor">
                      Special Mention
                    </p>
                    <h3 className="card__heading changecolor">
                      Project GuitAR
                    </h3>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
