import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us-Ecommerce App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            We're a company that obsesses over our customers. Our actions,
            goals, projects, programs and inventions begin and end with the
            customer top of mind. In other words, we start with the customer and
            work backwards. When we hit on something that is really working for
            customers, we double-down on it with hopes to turn it into an even
            bigger success. However, it’s not always as clean as that. Inventing
            is messy, and over time, it’s certain that we’ll fail at some big
            bets too. You'll also hear us say that at Amazon, it's always "Day
            1." What do we mean? Our approach remains the same as it was on our
            very first day — to make smart, fast decisions, stay nimble,
            innovate and invent, and focus on delighting customers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
