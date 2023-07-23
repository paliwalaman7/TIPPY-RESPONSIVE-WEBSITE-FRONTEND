import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/destination";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        title="your journey your story"
        text="Choose your fav places"
        buttonText="Travel plan"
        url="/"
        btnclass="show"
      />
      <Destination />
    </>
  );
}

export default Home;
