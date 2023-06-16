import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractor from "../PopularInstractor/PopularInstractor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstractor></PopularInstractor>
      <Discount></Discount>
    </div>
  );
};

export default Home;
