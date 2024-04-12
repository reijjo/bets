import campfire from "../../assets/images/Campfire-rafiki.svg";
import stock from "../../assets/images/laptop-miniman.jpeg";
import aihero from "../../assets/images/aihero.jpeg";
// import excelsheet from "../../assets/images/geisha.png";

import Button from "../common/Button";
import TestimonialCard from "./TestimonialCard";

const Homepage = () => {
  return (
    <main>
      {/* Excel sheet image */}
      <div className="excel-sheet-img"></div>
      {/* Excel sheet img end */}

      <div className="hero">
        <div className="hero-text">
          <h1>Track your bets online without annoying excel sheets</h1>
          <p>
            But we have all the best features from Excel sheets to track your
            bets on the go
          </p>
          <div className="hero-buttons">
            <Button className="btn">
              <h3
                style={{
                  fontSize: "0.9rem",
                }}
              >
                register now
              </h3>
            </Button>
            <Button className="btn btn-border">
              <h3 style={{ fontSize: "0.9rem" }}>try demo</h3>
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={aihero} alt="hero-img" />
        </div>
        <div className="features">
          <h3>features</h3>
          <div className="feature-images">
            <div>
              <img src={campfire} alt="betting_data" />
              <p>Betting Data</p>
            </div>
            <div>
              <img src={campfire} alt="depo_with" />
              <p>Deposits & Withdraws</p>
            </div>
            <div>
              <img src={campfire} alt="all_time" />
              <p>All Time Performance</p>
            </div>
            <div>
              <img src={stock} alt="summary" />
              <p>Summary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Hero Betting Data */}
      <div className="mini-hero">
        <div className="mini-hero-img">
          <img src={stock} alt="betting_data" height="100%" width="100%" />
        </div>
        <div className="mini-hero-text">
          <h3>betting data</h3>
          <h2>holds all the relevant data about your bets</h2>
          <p>
            Tracks automatically the the outcome of your bets, and keeps on
            track of the bet type, sport/league and much more
          </p>
        </div>
      </div>

      {/* Gradient background */}
      <div className="two-images">
        {/* Mini Hero with 2 Images */}
        <div className="mini-hero">
          <div className="depo-with">
            <img src={campfire} alt="depo&with" />
            <h3>Deposits & withdrawals</h3>
            <div className="text-wrapper">
              <h4>keeps you on track of your deposits and withdrawals</h4>
              <p>
                Shows your deposits and withdrawals, sorts them by bookies, and
                also shows your available funds and bonus bets
              </p>
            </div>
          </div>
          <div className="alltime">
            <img src={stock} alt="depo&with" />

            <h3>All time performance</h3>
            <div className="text-wrapper">
              <h4>shows everything about your betting history</h4>
              <p>
                Databank of your bets, shows total number of your bets, your
                winning percentage, sorts your bets by league or type,
                everything that you need to know you bets is found here.
              </p>
            </div>
          </div>
        </div>

        {/* Mini Hero Summary */}
        <div className="mini-hero">
          <div className="mini-hero-img" style={{ order: 2 }}>
            <img src={stock} alt="betting_data" height="100%" width="100%" />
          </div>
          <div className="mini-hero-text">
            <h3>summary</h3>
            <h2>Small summary to keep you on track of your bets</h2>
            <p>
              Shows bets today, last 7 days, this month, this year and all time
              for you to see how is it going
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2>read what others have to say</h2>
          <div className="testimonials-cards">
            <TestimonialCard
              name="Reijjo"
              feedback="This is the thing what I've been looking for!"
            />
            <TestimonialCard name="Teemu" feedback="Magnificent!" />
            <TestimonialCard name="JJ Rembo" feedback="You are a genius!" />
          </div>
        </div>

        {/* Gradient background end */}
      </div>

      {/* Big Thing */}
      <div className="join-now">
        <h3>are you ready?</h3>
        <h2>Start tracking your bets!</h2>
        <Button className="btn" children="register now!" />
      </div>
    </main>
  );
};

export default Homepage;
