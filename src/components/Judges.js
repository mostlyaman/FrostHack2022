import React from 'react'

export const Judges = (props) => {
    return (
        <div>
        {/* team */}
        <div id="team" className="section" style={{marginTop: '10vh'}}>
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* section title */}
              <div className="section-title">
                <h3 className="title"><span>meet the</span> <span style={{color: '#dd0a37'}}>Judges</span></h3>
              </div>
              {/* /section title */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/tag.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Timothy A. Gonsalves</b></h2>
                <p>Computer Scientist, Professor</p>
                <p>Former Director, IIT Mandi</p>
                <a href="https://www.facebook.com/timothy.gonsalves.71" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="email:tag@iitmandi.ac.in" target="_blank">
                  <i className="fas fa-envelope-open-text" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/manas.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Manas Thakur</b></h2>
                <p>Computer Scientist, Assistant Professor IIT Mandi</p>
                <a href="https://www.facebook.com/manasthakur17" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
                <a href="email:manas@iitmandi.ac.in" target="_blank">
                  <i className="fas fa-envelope-open-text" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/sreelakshmi.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Sreelakshmi Manjunath</b></h2>
                <p>Computer Scientist, Assistant Professor IIT Mandi</p>
                <a href="https://scholar.google.com/citations?user=P66Q9xUAAAAJ&hl=en" target="_blank">
                  <i className="fab fa-google" />
                </a>
                <a href="email:sreelakshmi@iitmandi.ac.in" target="_blank">
                  <i className="fas fa-envelope-open-text" />
                </a>
              </div>
              {/* /team-member */}
            </div>
            {/* row */}
            <div className="row">
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/priyansh.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Priyansh Saxena</b></h2>
                <p>Analyst at Goldman Sachs</p>
                <p>Alumnus, IIT Mandi</p>
                <a href="https://www.facebook.com/PCGAYLE" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/sahil.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Sahil Arora</b></h2>
                <p>Software Engineer at Google</p>
                <p>Alumnus, IIT Mandi</p>
                <a href="https://www.facebook.com/profile.php?id=100001976391752" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
              </div>
              {/* /team-member */}
              {/* team-member */}
              <div className="col-lg-4 col-md-6 centered">
                <img className="img img-circle" src="img/shikhar.jpg" height="200px" width="200px" alt="Hitesh Ramchandani" />
                <br />
                <h2><b>Shikhar Gupta</b></h2>
                <p>Associate at Goldman Sachs</p>
                <p>Alumnus, IIT Mandi</p>
                <a href="https://www.facebook.com/shikhar.in" target="_blank">
                  <i className="fab fa-facebook fa-lg" />
                </a>
              </div>
              {/* /team-member */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /team */}
        </div>

    )
}
