import { RESET_STATE } from "./resetType";

interface FormState {
  area: number | null;
  address: string;
  landPrice: number | null;
  pid: number | null;
  surveyNo: number | null;
}

const initialState: FormState = {
  area: null,
  address: "",
  landPrice: null,
  pid: null,
  surveyNo: null,
};

export const resetReducer = (state = initialState, action: any): FormState => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
