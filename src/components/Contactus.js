export const Contactus = (props) => {
    return (
        <div id="contact" className="section">
            {/* <!-- container --> */}
            <div className="container">
                {/* <!-- row --> */}
                <div className="row">
                    {/* <!-- section title --> */}
                    <div className="section-title">
                        {/* <h3 className="title"><span>Contact</span> <span style="color: #dd0a37;">Us</span></h3> */}
                       <h3 className="title"><span id="contact_us" >Contact </span><span style={{color: "#dd0a37"}}>&nbsp;Us</span> </h3>
                    </div>
                    {/* <!-- /section title -->

				<!-- contact --> */}
                    <div className="col-sm-3">
                        <div className="contact">
                            <i className="fas fa-map-marked-alt fa-4x"></i>
                            <h3 className="mt-3">Address</h3>
                            <a className="changecolor" href="https://goo.gl/maps/6kq6iLFDopCikWVH7">
                                IIT Mandi,
                                Kamand,
                                Himachal Pradesh
                            </a>
                        </div>
                    </div>
                    {/* <!-- /contact -->

				<!-- contact --> */}
                    <div className="col-sm-3">
                        <div className="contact">
                            <i className="fas fa-phone fa-4x"></i>
                            <h3 className="mt-3">Phone</h3>
                            <p><a href="tel:+919654855054" className="changecolor">Nehal : +919654855054</a></p>
                            <p><a href="tel:+917987590764" className="changecolor">Shubhanshu : +917987590764</a></p>
                        </div>
                    </div>
                    {/* <!-- /contact -->

				<!-- contact --> */}
                    <div className="col-sm-3">
                        <div className="contact">
                            <i className="fas fa-envelope fa-4x"></i>
                            <h3 className="mt-3">Email</h3>
                            <a href="mailto:teamfrosthack@gmail.com" className="changecolor">teamfrosthack@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="contact">
                            <i className="fab fa-discord fa-4x"></i>
                            <h3 className="mt-3">Discord Server</h3>
                            <a href="https://discord.com/invite/YsV3MJ7ke2" className="changecolor">Invite Link</a>
                        </div>
                    </div>


                    {/* <!-- /contact -->

				<!-- contact -->
				<!-- <div className="col-sm-3">
					<div className="contact">
						<img src="img/zulip.svg" alt="zulipchat">
						<h3 className="mt-3">Zulip</h3>
						<a href="https://frosthack.zulipchat.com/">frosthack.zulipchat.com</a>
					</div>
				</div> --> */}
                    {/* <!-- /contact --> */}

                </div>
                {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
        </div>
    );
}

