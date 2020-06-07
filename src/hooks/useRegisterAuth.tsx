import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { changeField, initializeForm } from "../modules/auth";

function useRegisterAuth() {
  const dispatch = useDispatch();

  const Form = useSelector((state: RootState) => state.auth.register);

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ formtype: "register", name, value }));
  };

  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const InitializeForm = dispatch(initializeForm("register"));

  return {
    Form,
    OnChange,
    OnSubmit,
    InitializeForm,
  };
}

export default useRegisterAuth;
