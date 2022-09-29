import { Navbar } from "../components/Navbar";
const MyAapp = ({ Component, pageProps }) => {
  return (
    <Navbar>
      <Component {...pageProps} />;
    </Navbar>
  );
};
export default MyAapp;
