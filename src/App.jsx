import React from "react";
import Grid from "./UI/Grid";
import Navigation from "./components/Navigation/Navigation";
import { ButtonOutline } from "./UI/Button";
import RoomImage from "./assets/hero-room.jpg";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Restaurant from "./components/Restaurant/Restaurant";
import Award from "./components/Award/Award";
import RoomSuite from "./components/RoomSuite/RoomSuite";
import Facilities from "./components/Facilities/Facilities";
import Testamonials from "./components/Testamonials/Testamonials";
import News from "./components/News/News";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <Grid>
      <Navigation />
      <div className="col-start-6 col-end-[-1] row-start-1 row-end-2 pr-20 flex items-center justify-end">
        <ButtonOutline text="Book now" />
      </div>
      <div className="col-start-6 col-end-[-1] row-start-1 row-end-3 border-l-[2px] border-grey-border">
        <img src={RoomImage} alt="Scape hotel room" className="w-full h-full" />
      </div>
      <Header />
      <Introduction />
      <Restaurant />
      <Award />
      <RoomSuite />
      <Facilities />
      <Testamonials />
      <News />
      <Newsletter button="Submit" />
      <Footer />
    </Grid>
  );
};

export default App;
