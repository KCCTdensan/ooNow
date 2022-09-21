import { css } from "@emotion/react";
import React from "react";
import Header from "components/molecules/Header";
import Footer from "components/molecules/Footer";
import TimeLine from "components/molecules/TimeLine";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div css={styles.TL}>
        <TimeLine />
        <TimeLine />
      </div>
      <Footer />
    </>
  );
};

export default Home;

const styles = {
  TL: css`
    margin: 2em 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: -10px;
      width: 2px;
      height: -webkit-calc(100% + 20px);
      height: calc(100% + 20px);
      background-color: black;
    }
    &:before {
      left: 10px;
    }
    &:after {
      right: 10px;
    }
  `,
};
