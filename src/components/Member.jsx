import React from "react";

export const Member = (props) => {
  return (
    //   {/* team-member */}
    <div className="col-lg-3 col-md-6 centered">
      <img
        className="img img-circle"
        src={
          "img/" +
          (props.img ? props.img : props.name.split(" ")[0].toLowerCase()) +
          ".jpg"
        }
        height="200px"
        width="200px"
        alt=""
      />
      <br />
      <h2>
        {/* <b className="changecolor">Deepali Singh</b> */}
        <b className="changecolor">{props.name}</b>
      </h2>
      {/* <p className="changecolor">Branding</p> */}
      <p className="changecolor">{props.role}</p>
      <a
        rel="noreferrer"
        // href="https://www.facebook.com/deepali.s11/"
        href={props.fb}
        target="_blank"
      >
        {props.fb ? <i className="fab fa-facebook fa-lg" /> : null}
      </a>
      {/* <a rel="noreferrer" href="tel:+918058041116" target="_blank"> */}
      <a rel="noreferrer" href={"tel:+91" + props.phone} target="_blank">
        <i className="fas fa-phone fa-lg" />
      </a>
    </div>
    // {/* /team-member */}
  );
};
