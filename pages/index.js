import Head from "next/head";
import {
  HeroSection,
  Navbar,
  Footer,
  Services,
  PeopleSay,
} from "../components";

const index = () => {
  return (
    <div>
      <Head>
        <title>The New York Times International</title>
        <link
          rel="icon"
          href="https://www.nytimes.com/vi-assets/static-assets/favicon-d2483f10ef688e6f89e23806b9700298.ico"
        />
      </Head>
      <Navbar />
      <HeroSection />
      <Services />
      <PeopleSay />
      <Footer />
    </div>
  );
};

export default index;
