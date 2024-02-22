import Header from "../../components/MainHeader";
import ReadList from "../../components/ReadList";
import Popular from "../../components/Necessary";
import "./homea.css";
import Random from "../../components/Random";
import Essentials from "../../components/Essentials";
import Ending from "../../components/Ending";

const HomeA = () => {
  return (
    <>
      <Header />
      <ReadList />
      <Popular />
      <Random />
      <Essentials />
      <Ending />
    </>
  );
};

export default HomeA;
