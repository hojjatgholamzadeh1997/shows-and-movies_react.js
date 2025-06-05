import { useParams } from "react-router-dom";
import MyNavbar from "./MyNavbar";

function Show() {
  const { showID } = useParams();

  return (
    <>
      <MyNavbar />
      <p>Show ID: {showID}</p>
    </>
  );
}

export default Show;
