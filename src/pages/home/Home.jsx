import Button from 'react-bootstrap/Button';
import MyNavbar from "../../components/MyNavbar";

function Home() {
  return (
    <>
      <MyNavbar />
      <p>Home Page</p>
      <Button variant="primary">Primary</Button>
    </>
  );
}

export default Home;
