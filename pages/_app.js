import { Navbar } from "../components/Navbar";
import { DataProvider } from "../context/DataContext";
const MyAapp = ({ Component, pageProps }) => {
  return (
    <DataProvider>

    <Navbar>
      <Component {...pageProps} />;
    </Navbar>
    </DataProvider>
  );
};
export default MyAapp;
