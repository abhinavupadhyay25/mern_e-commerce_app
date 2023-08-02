import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            The privacy of our visitors at Ecommerce app is very important to
            us. We want you to understand the type of information we collect
            when you visit our site and how we use this information.
          </p>
          <p>
            In common with other websites, log files are stored on the web
            server saving details such as your IP address, browser type,
            referring page and time of visit. This information is not used to
            track individual visitors to this website.
          </p>
          <p>
            Cookies are small digital signature files that are stored by your
            web browser that allow your preferences to be recorded when visiting
            the website. Also they may be used to track your return visits to
            the website. By using this website, you signify your acceptance of
            this policy and terms of service. If you do not agree to this
            policy, please do not use our website. Your continued use of the
            website following the posting of changes to this policy will be
            deemed your acceptance of those changes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
