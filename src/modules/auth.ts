import produce from "immer";

const CHANGE_FIELD = "auth/CHANGE_FIELD" as const;
const INITIALIZE_FORM = "auth/INITIALIZE_FORM" as const;

type ChangeFieldType = {
  formtype: string;
  [name: string]: string;
  value: string;
};

export const changeField = ({ formtype, name, value }: ChangeFieldType) => ({
  type: CHANGE_FIELD,
  payload: {
    formtype,
    name,
    value,
  },
});
export const initializeForm = (name: any) => ({
  type: INITIALIZE_FORM,
  payload: {
    name,
  },
});

type AuthAction =
  | ReturnType<typeof changeField>
  | ReturnType<typeof initializeForm>;

type AuthState = {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
    [name: string]: string;
  };
  login: {
    username: string;
    password: string;
    [name: string]: string;
  };
  [formtype: string]: object | undefined;
};

const initialState: AuthState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
};

function auth(state: AuthState = initialState, action: AuthAction) {
  switch (action.type) {
    case CHANGE_FIELD:
      if (action.payload.formtype === "register") {
        return produce(state, (draft) => {
          draft.register[action.payload.name] = action.payload.value;
        });
      }
      if (action.payload.formtype == "login") {
        return produce(state, (draft) => {
          draft.login[action.payload.name] = action.payload.value;
        });
      }
    case INITIALIZE_FORM:
      return {
        ...state,
        [action.payload.name]: initialState[action.payload.name],
      };
    default:
      return state;
  }
}

export default auth;
