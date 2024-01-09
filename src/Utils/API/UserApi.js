import axios from "axios";

export const PersonalInfo = async (data) => {
  // emailFirst_Name
  // Middle_Name
  // Last_Name
  // Email
  // Gender
  // Marita_Status
  // Mobile
  // Alternative_Mobile
  // Marital_Status
  // Date_of_Birth
  // Current_Address
  // Total_Working_Experience
  // Current_Gross_Salary
  const useData = await axios.post("http://localhost:5001/user/pi", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  } else {
    window.location.href = "/personal-information";
  }
};

export const Educational_Status = async (data) => {
  //email
  //Current_Educational_Status
  // Field_of_Study
  // CGPA
  // Year_of_Graduation
  // Academic_Institution
  // Attach_Updated_Documents
  // Exit_Exam_Result
  const useData = await axios.post(
    "http://localhost:5001/user/edustatus",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  } else {
    window.location.href = "/personal-information";
  }
};

export const WorkExperience = async (data) => {
  //email
  //   Orginization
  // Position
  // From_Date
  // To_Date
  console.log(data);
  const useData = await axios.post("http://localhost:5001/user/workexp", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  } else {
    window.location.href = "/personal-information";
  }
};

export const ApplyVacancy = async (data) => {
  // UserId, VacancyId
  const useData = await axios.post(
    "http://localhost:5001/user/ApplyVacancy",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  } else {
    window.location.href = "/dashboard";
  }
};

export const Sendfeedback = async (data) => {
  // /name
  // email
  // subject
  // message
  const useData = await axios.post(
    "http://localhost:5001/user/Sendfeedback",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(useData);
  if (useData.status === 200) {
    window.location.reload(true);
  } else {
    window.location.href = "/contact-us";
  }
};

export const fetchVacancy = async () => {
  const useData = await axios.get("http://localhost:5000/user/getVacancies");
  return useData.data;
};

export const fetchNews = async () => {
  const useData = await axios.get("http://localhost:5000/user/getNews");
  return useData.data;
};
