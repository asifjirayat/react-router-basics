import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>My Homepage</h1>
      <Link to="/products">List of Products</Link>
    </>
  );
};

export default Home;
