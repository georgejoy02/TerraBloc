import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// area, address, landPrice,pid ,surveyNo
interface FormState {
  area: number | null;
  address: string;
  landPrice: number | null;
  pid: number | null;
  surveyNo: string;
}

const initialState: FormState = {
  area: null,
  address: "",
  landPrice: null,
  pid: null,
  surveyNo: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setArea(state, action: PayloadAction<number | null>) {
      state.area = action.payload;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setLandPrice(state, action: PayloadAction<number | null>) {
      state.landPrice = action.payload;
    },
    setPid(state, action: PayloadAction<number | null>) {
      state.pid = action.payload;
    },
    setSurveyNo(state, action: PayloadAction<string>) {
      state.surveyNo = action.payload;
    },
  },
});

export const { setArea, setAddress, setLandPrice, setPid, setSurveyNo } =
  formSlice.actions;

export default formSlice.reducer;
