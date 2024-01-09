import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputPersonalInformation: [],
  InputEducationalInformation: [],
  InputWorkInformation: [],
};

const UserStore = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setPersonalInformationData(state) {},
    setPersonalInformation(state, action) {
      const newData = action.payload;
      state.InputPersonalInformation.push({
        Email: newData.Email,
        emailFirst_Name: newData.emailFirst_Name,
        Middle_Name: newData.Middle_Name,
        Last_Name: newData.Last_Name,
        Gender: newData.Gender,
        Mobile: newData.Mobile,
        Alternative_Mobile: newData.Alternative_Mobile,
        Marital_Status: newData.Marital_Status,
        Date_of_Birth: newData.Date_of_Birth,
        Current_Address: newData.Current_Address,
        Total_Working_Experience: newData.Total_Working_Experience,
        Current_Organization: newData.Current_Organization,
        Current_Gross_Salary: newData.Current_Gross_Salary,
      });
    },
    setEducationalInformationData(state) {},
    setEducationalInformation(state, action) {
      const newData = action.payload;
      state.InputEducationalInformation.push({
        email: newData.email,
        Current_Educational_Status: newData.Current_Educational_Status,
        Field_of_Study: newData.Field_of_Study,
        CGPA: newData.CGPA,
        Year_of_Graduation: newData.Year_of_Graduation,
        Academic_Institution: newData.Academic_Institution,
        Attach_Updated_Documents: newData.Attach_Updated_Documents,
        Exit_Exam_Result: newData.Exit_Exam_Result,
      });
    },
    setWorkInformationData(state) {},
    setWorkInformation(state, action) {
      const newData = action.payload;
      state.InputWorkInformation.push({
        email: newData.email,
        Orginization: newData.Orginization,
        Position: newData.Position,
        From_Date: newData.From_Date,
        To_Date: newData.To_Date,
      });
    },
  },
});

export const {
  setPersonalInformationData,
  setPersonalInformation,
  setEducationalInformationData,
  setEducationalInformation,
  setWorkInformationData,
  setWorkInformation,
} = UserStore.actions;

export default UserStore.reducer;
