import { useState } from "react";
import { css } from "@emotion/react";
import Icon from "components/atoms/Icon";
import Header from "components/molecules/Header";
import UIButton from "components/atoms/UIButton";
import TimeLine from "components/molecules/TimeLine";
import Footer from "components/molecules/Footer";

const Profile = () => {
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");
  const [flag, setFlag] = useState(false);
  const onClickAddText = () => {
    setAddText(text);
    setText("");
    setFlag(false);
  };
  const onClickSetFlag = () => {
    setFlag(true);
  };
  return (
    <>
      <Header />
      <div css={styles.body}>
        <div
          css={css`
            display: flex;
          `}
        >
          <Icon s="../../../../images/sample.png" w="45" h="45" />
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              margin-left: 674px;
            `}
          >
            <UIButton text="編集" handler={onClickSetFlag} />
          </div>
        </div>
        <div css={styles.name}>UserName</div>
        <div>
          <input
            css={css`
              display: ${flag ? "block" : "none"};
            `}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <p
            css={css`
              display: ${flag ? "none" : "block"};
            `}
          >
            {addText}
          </p>
          <div
            css={css`
              display: ${flag ? "block" : "none"};
            `}
          >
            <UIButton text="編集完了" handler={onClickAddText} />
          </div>
        </div>
        <div css={styles.TL}>
          <TimeLine />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

const styles = {
  name: css`
    font-weight: bold;
  `,
  body: css`
    margin-left: 300px;
    margin-right: 300px;
  `,
  TL: css`
    margin-top: 100px;
    margin-bottom: 40px;
  `,
};
