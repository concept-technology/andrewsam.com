import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameApp from "./RawgGame/components/GameApp";
import NavBar from "./Home-page/components/NavBar";
import NavObject from "./Home-page/components/Nav-Object";
import MobileNav from "./Home-page/components/MobileNav";
import { Routes, Route } from "react-router-dom";
import img from "./assets/Images/pageBack.jpg";
import ProjectHome from "./Home-page/Project-Page/Project-Home";
import projecObject from "./Home-page/Project-Page/Project-Object";
import HomeApp from "./Home-page/components/Home-App";


function App() {
  function handleClick() {
    console.log(" ")
  }
  return (
    <Grid templateAreas={{ lg: `"nav " " main"`, base: `"nav" "main"` }}>
      {/* nav bar */}
      <GridItem
        area="nav"
        position={"fixed"}
        w={"100%"}
        zIndex={999}
        backgroundImage={img}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
      >
        <Show above="lg">
          <NavBar navbar={NavObject} onClick={handleClick} />
        </Show>
        <Show below="lg">
          <MobileNav navbar={NavObject} onClick={handleClick} />
        </Show>
      </GridItem>
      {/* side bar */}

      {/* main page */}
      <GridItem area="main"
        position={"absolute"}
        top={{base:57, lg:45}} w={"100%"}>
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="about" />
          <Route path="contact" />
          <Route path="blog" />

          <Route
            path="project" //
            element={<ProjectHome projectItems={projecObject} />}
          />
            <Route path="gamehub" element={<GameApp />} />
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;