import React from "react";
import Container from "react-bootstrap/Container";

import Header from "./components/header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumList from "./components/Albumlist";

function App() {
  return (
    <>
      <Header />
      <Container>
      <AlbumList></AlbumList>
      </Container>
    </>
  );
}

export default App;