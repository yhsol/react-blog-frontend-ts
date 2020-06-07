import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

interface AuthFormProps {
  type: string;
  form: {
    username: string;
    password: string;
    passwordConfirm?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface TextMapProps {
  login: string;
  register: string;
  [type: string]: string;
}

const textMap: TextMapProps = {
  login: "login",
  register: "register",
};

function AuthForm({ type = "login", form, onChange, onSubmit }: AuthFormProps) {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="id"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="password confirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan={true} fullWidth={true}>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">sign up</Link>
        ) : (
          <Link to="/login">login</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
