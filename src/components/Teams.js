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
            {/* <Member
              name="Nehal Reshu"
              phone="9654855054"
              role="Overall Head"
              fb="https://www.facebook.com/nehalreshu"
            />
            <Member
              name="Shubhanshu Agrawal"
              phone="7987590764"
              role="Overall Head"
              fb="https://www.facebook.com/shubhanshu.agrawal.399/"
            /> */}
            <Member
              name="Rijul Jain"
              phone="9910844346"
              role="Overall Head"
              fb="https://www.facebook.com/rijul.jain.144/"
            />
            <Member
              name="Pushkar Patel"
              phone="7876425139"
              role="Overall Head"
              fb="https://www.facebook.com/pushkar.patel.739326"
            />
             <Member
              name="Harshit Krishna"
              phone="9667762142"
              role="Technical Team"
              fb="https://www.facebook.com/harshit.krishna.587"
            />
            <Member
              name="Dipesh Sharma"
              phone="7339821343"
              role="Technical Team"
              fb="https://www.facebook.com/dipeshs809"
            />
            <Member
              name="Ashutosh Sharma"
              phone="9024790172"
              role="Technical Team"
              fb="https://www.facebook.com/"
            />
            <Member
              name="Prateeksha Pal"
              phone="8957742586"
              role="Technical Team"
              fb="https://www.facebook.com/prateeksha.pal.313"
            />
            {/* <Member
              name="Rishabh Garg"
              phone="7027760333"
              role="Technical Head"
              fb="https://www.facebook.com/profile.php?id=100039774819697"
              img="rishabh_g"
            /> */}
              {/* <Member
                name="Paras "
                phone="7860688567"
                role="Sponsor Head"
                fb="https://www.facebook.com/profile.php?id=100008742852432"
              />
              <Member
              name="Shubham Saurav"
              phone="9304902560"
              role="Sponsor Head"
              fb="https://www.facebook.com/shubham.saurav.980967"
            />
             <Member
              name="Yash Verma"
              img="yashv"
              phone="9818722716"
              role="Sponsor Head"
              fb="https://www.facebook.com/uchihamangekyoun/"
            /> */}
            <Member
              name="Kanishk Garg "
              phone="9877506661"
              role="Social Media Head"
              fb="https://www.facebook.com/kanishak.garg.90/"
            />
            {/* <Member
              name="Surendra Singh"
              phone="8094876054"
              role="Social Media Head"
              fb="https://www.facebook.com/surendrasingh24"
            />
            <Member
              name="Niveditha N"
              phone="7012016415"
              role="Publicity Head"
              fb="https://www.facebook.com/profile.php?id=100009269570738"
            /> */}
             <Member
              name="Punit Daga"
              phone="8003347240"
              role="Design Head"
              fb="https://www.facebook.com/punit.daga.14/"
            />
            
            <Member
              name="Anurag Maurya"
              phone="7379906268"
              role="Sponsor"
              fb="https://www.facebook.com"
            />
            
            <Member
              name="Kuldeep Jain"
              phone="8986388665"
              role="Sponsor"
              fb="https://www.facebook.com/kuldeep.jaindugar"
            />
            <Member
              name="Lavish Sachdeva "
              phone="9050919400"
              role="Sponsor"
              fb="https://www.facebook.com/lavish.sachdeva.737"
            />
            <Member
              name="Mohit Verma"
              phone="9958425215"
              role="Sponsor"
              fb="https://www.facebook.com/vermamohit.3301/"
            />
            <Member
              name="Palak Sharma"
              phone="8290747574"
              role="Sponsor"
              fb="https://www.facebook.com/profile.php?id=100057358935941"
            />
            <Member
              name="Pushpendra Kumar"
              phone="9996115704"
              role="Sponsor"
              fb="https://m.facebook.com/pushpendra.choudhary.2011?ref=bookmarks"
            />
            <Member
              name="Rajat"
              phone="9896071501"
              role="Sponsor"
              fb="https://www.facebook.com/rajat.bansal.526438/"
            />
            <Member
              name="Rishabh Maheshwari "
              phone="7740818819"
              role="Sponsor"
              fb="https://www.facebook.com/rishabh.maheshwari.792/"
            />
            <Member
              name="Varinder Singh"
              phone="7973329710"
              role="Sponsor"
              fb="https://www.instagram.com/juztgxldx/ "
            />
            <Member
              name="Yash Sharma"
              img="yashs"
              phone="8802131138"
              role="Sponsor"
              fb="https://www.facebook.com/Yashvats.42/"
            />
            
            <Member
              name="Khushboo "
              phone="7876873507"
              role="Publicity"
              fb="facebook.com"
            />
            <Member
              name="Ritam Chakraborty"
              phone="7439257709"
              role="Publicity"
              fb="https://www.facebook.com/ritam.chakraborty.1671/"
            />
            <Member
              name="Vaibhav"
              phone="9812276214"
              role="Publicity"
              fb="https://www.facebook.com/profile.php?id=100067330951672"
            />
           
            <Member
              name="Kushagra Agrawal"
              phone="8305023463"
              role="Design"
              fb="https://www.facebook.com/kushagra.the.great"
            />
            <Member
              name="Shivam Middha"
              phone="8077970253"
              role="Design"
              fb="https://www.facebook.com/vasuu.midha"
            />
            <Member
              name="Vishal Sharma"
              phone="9540140310"
              role="Design"
              fb="https://www.facebook.com/profile.php?id=100004157735928"
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
