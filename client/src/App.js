import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { Mypage } from "./pages/mypage";
import { Navbar } from "./components/navbar";
import { PostThumbnail } from "./components/postThumbnail";
import { AddPostFloatBtn } from "./components/addPostFloatBtn";

const GlobalStyles = createGlobalStyle`
    ${reset}
`;

const TempContainer = styled.div`
  height: 200vh;
  display: grid;
  place-items: center;
`

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <TempContainer>
        {/* <PostThumbnail /> */}
        <AddPostFloatBtn />

      </TempContainer>
      <Routes>
        <Route path="mypage" element={<Mypage />} />
      </Routes>
    </div>
  )
};
