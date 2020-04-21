import React from "react";
import styled from 'styled-components';
import MediaContainer from './Components/MediaContainer/MediaContainer';
import "./App.css";
import PageTitle from "./Components/PageTitle/PageTitle";

const WrapperDiv = styled.div`
  margin: auto;
  padding: 40px;
  max-width: 1024px;
  text-align: center;
  background-color: #fbfbfb;
`;

function App() {
  return (
    <WrapperDiv>
      <PageTitle />
      <MediaContainer />
    </WrapperDiv>
  );
}

export default App;
