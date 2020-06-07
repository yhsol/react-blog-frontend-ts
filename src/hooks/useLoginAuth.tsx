import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { changeField, initializeForm } from "../modules/auth";

function useLoginAuth() {
  const dispatch = useDispatch();

  const Form = useSelector((state: RootState) => state.auth.login);

  const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(changeField({ formtype: "login", name, value }));
  };

  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const InitializeForm = dispatch(initializeForm("login"));

  return {
    Form,
    OnChange,
    OnSubmit,
    InitializeForm,
  };
}

export default useLoginAuth;
