import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ReefHome from "./pages/ReefHome";
import UpdateRecords from "./pages/UpdateRecords";
import ViewNft from "./pages/ViewNft";
import ReefMint from "./pages/ReefMint";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/updaterecords":
        title = "";
        metaDescription = "";
        break;
      case "/viewnft":
        title = "";
        metaDescription = "";
        break;
      case "/reefmint":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ReefHome />} />

      <Route path="/updaterecords" element={<UpdateRecords />} />

      <Route path="/viewnft" element={<ViewNft />} />

      <Route path="/reefmint" element={<ReefMint />} />
    </Routes>
  );
}
export default App;
