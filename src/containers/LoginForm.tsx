import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { changeField, initializeForm } from "../modules/auth";
import AuthForm from "../components/auth/AuthForm";

function LoginForm() {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.auth.login);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ formtype: "login", name, value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  console.log("form", form);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default LoginForm;
