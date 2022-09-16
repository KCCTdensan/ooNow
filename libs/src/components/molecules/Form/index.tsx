import React, { useState } from "react";
import { css } from "@emotion/react";
import UIButton from "components/atoms/UIButton"
import Logo from "components/atoms/Logo"

function Form(props){
  const initialValues = {username: "", mailAddress: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    //ログイン情報の送信
    //バリデーションチェック
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    //半角英数字のみ(空文字OK)
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    //valueが空ならerrorsの配列に入れる。
    if (!values.username) {
      errors.username = "ユーザー名を入力してください";
    } else if (values.username.length < 5) {
      errors.username = "5文字以上20文字以下のユーザー名を入力してください";
    } else if (values.username.length > 20) {
      errors.username = "5文字以上20文字以下のユーザー名を入力してください";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 7) {
      errors.password = "7文字以上20文字以下のパスワードを入力してください";
    } else if (values.password.length > 20) {
      errors.password = "7文字以上20文字以下のパスワードを入力してください";
    }
    return errors;
  };
  return(
    <>
    <div css={styles.body}>
    <div css={styles.formContainer} >
      <form css={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1 css={styles.h1}><Logo />{props.text}</h1>
        <hr />
        <div css={styles.uiForm}>
          <div css={styles.formField}>
            <label css={styles.formFieldLabel}>ユーザー名</label>
            <input 
              css={styles.formFieldInput}
              type="text"
              placeholder="ユーザー名" 
              name="username" 
              onChange={(e) => handleChange(e)}/>
          </div>
          <p css={styles.errorMsg}>{formErrors.username}</p>
          <div css={styles.formField}>
            <label css={styles.formFieldLabel}>メールアドレス</label>
            <input 
              css={styles.formFieldInput}
              type="text" 
              placeholder="メールアドレス" 
              name="mailAddress" 
              onChange={(e) => handleChange(e)}/>
          </div>
          <p css={styles.errorMsg}>{formErrors.mailAddress}</p>
          <div css={styles.formField}>
            <label css={styles.formFieldLabel}>パスワード</label>
            <input 
              css={styles.formFieldInput}
              type="text"     
              placeholder="パスワード" 
              name="password" 
              onChange={(e) => handleChange(e)}/>
          </div>
          <p css={styles.errorMsg}>{formErrors.password}</p>
          <UIButton text={props.action} strong/>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div css={styles.msgOk}>{props.action}に成功しました</div>
          )}
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

//css

const styles = {
  formContainer: css`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  form: css`
    background-color: white;
    width: 70%;
    max-width: 450px;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    box-shadow: 25px 31px 29px -11px #b35f00;
    border-radius: 10px;
  `,
  uiForm: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
  `,
  formField: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  formFieldInput: css`
    border: 1px solid gray;
    padding: 20px;
    border-radius: 4px;
  `,
  formFieldLabel: css`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 3px;
  `,
  errorMsg: css`
    color: red;
    margin: 0;
    align-self: flex-start;
  `,
  msgOk: css`
    color: green;
    margin-top: 15px;
  `,
  button: css`
    background-color: #ff6518;
    width: 100%;
   margin-top: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      background-color: #ff5500;
    }
  `,
  h1: css`
    text-align: center;
  `,
  body: css`
    background: rgb(255,76,0);
    background: linear-gradient(
      90deg, 
      rgba(255,76,0,1) 0%, 
      rgba(255,128,0,1) 50%, 
      rgba(255,192,0,1) 100%);
    overflow-y: hidden;
  `
}

export default Form;
