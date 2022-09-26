import React, { useState } from "react";
import { css } from "@emotion/react";
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";
import Icon from "components/atoms/Icon";
import UIButton from "components/atoms/UIButton";

const Post = () => {
  const [text, setText] = useState("");
  const [templates, setTemplates] = useState([""]);
  const [count, setCount] = useState(0);

  // templatesにinputの中身を追加
  const onClickHandler = () => {
    setTemplates([...templates, text]);
    setText("");
  };

  // templatesの中身を展開して改行
  const texts = templates
    .join("\n")
    .split("\n")
    .map((item, index) => {
      return (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      );
    });

  return (
    <>
      <Header />
      <div css={styles.post}>
        <div
          css={css`
            width: 60px;
            height: 60px;
            margin-left: 400px;
          `}
        >
          <Icon iconUrl="../../../../images/sample.png" />
        </div>
        <input
          css={styles.text}
          name="post"
          placeholder="テンプレートを入力してください"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div css={styles.button}>
        <UIButton text="登録" handler={onClickHandler} />
      </div>
      <div>{texts}</div>
      <Footer />
    </>
  );
};

const styles = {
  post: css`
    display: flex;
    margin-bottom: 10px;
  `,
  text: css`
    margin-left: 25px;
    border-radius: 0.8rem;
    width: 400px;
  `,
  button: css`
    margin-left: 900px;
    margin-bottom: 20px;
    &:hover {
      cursor: pointer;
    }
  `,
};

export default Post;
