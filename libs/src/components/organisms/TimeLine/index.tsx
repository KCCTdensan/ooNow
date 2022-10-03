import React from "react";
import { css } from "@emotion/react";
import Icon from "components/atoms/Icon";

const TimeLine = () => {
  return (
    <>
      <div css={
        css`
        margin-top: 10px;
        margin-bottom: 10px;
      `
      }>
        <div css={
          css`
          display: flex;
        `
        }>
          <div className="icon" css={
            css`
            width: 45px;
            height: 45px;
          `
          }>
            <Icon iconUrl="../../../../images/sample.png" />
          </div>
          <div
            css={css`
              margin-left: 10px;
            `}
          >
            <div
              css={css`
                display: flex;
              `}
            >
              <div className="name">
                <strong>UserName</strong>
              </div>
              <div className="time" css={
                css`
                font-size: 70%;
                margin-left: 20px;
              `
              }>
                yyyy/mm/dd
              </div>
            </div>
            <div className="text" css={
              css`
              white-space: normal;
            `
            }>
              SampleText
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;


