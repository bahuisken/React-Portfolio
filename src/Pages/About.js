import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-12 mt-5 mb-5">
          <div className="card w-100 border border-dark">
            <div className="card-body">
              <h2 className="main-header text-center text-sm-left">
                About Brice
              </h2>
              <hr className="main-hr" />
              <img
                src="React-Portfolio/assets/images/bah-profile-image.jpg"
                className="img-fluid profile-img-full"
                alt="Brice Huisken"
              />
              <img
                src="React-Portfolio/assets/images/bah-profile-image.jpg"
                className="img-fluid profile-img-mobile"
                alt="Brice Huisken"
              />
              <p className="profile-text">
                Brice Huisken has spent most of his career in MarTech in client
                facing roles, supporting marketers and developers. There has
                always been a technical aspect to the roles he's had, mostly
                related to the SaaS platforms that he has helped Customers adopt
                or onboard to. Brice has been able to dip his toes into
                developemt throughout his career, when working in the Digital
                Advertising field, Email Marketing, and now CDP. As he touches
                more and more web technologies, he's been motivated to add more
                technical skills to his toolbox and better speak to the dev
                language(s). So, Brice has recently enrolled in the University
                of Denver Full Stack Coding Bootcamp. The knowledge that he
                obtains will not only help him grow, it will also allow him to
                better support his customers. And who knows, maybe in the future
                he can dive into fully technical roles.
              </p>
              <p>
                Feel free to check out Brice's <a href="portfolio">Portfolio</a>{" "}
                to get a sense of what he's building and learning as he makes
                his way through the bootcamp. Make sure to check back often as
                the portfolio grows. If you like was you see, please{" "}
                <a href="contact">contact</a> Brice! He's open to feedback,
                encouragement, and even opportunites.
              </p>
              <p>
                From a personal perspective, Brice is a Colorado native, and
                outside of work, he enjoys all the splendor the state has to
                offer. He has a wonderful wife, Kate, and two great kids, Avery
                and Bennett. If you can't find him at one of his kid's school
                activities, or coaching one of their teams, you'll certainly
                find him watching or attending a sporting event. Brice is also a
                huge music fan with an impressive collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
