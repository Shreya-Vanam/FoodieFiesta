import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Welcome to FoodieFiesta</h1>
      <p>Delicious food at your fingertips!</p>
      <Link to="/menu" className="btn">View Menu</Link>
    </div>
  );
}

export default Home;