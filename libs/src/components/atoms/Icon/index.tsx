import React from "react";
import { css } from "@emotion/react";

type Props = {
  s: string;
  w: string;
  h: string;
};

const Icon: React.FC<Props> = ({ s, w, h }) => {
  return (
    <img
      css={css`
        border: 3px;
        border-radius: 50%;
        width: ${w + "px"};
        height: ${h + "px"};
      `}
      src={s}
      alt="Icon"
    />
  );
};

export default Icon;

const styles = {};
