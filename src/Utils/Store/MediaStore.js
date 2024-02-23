import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputGallery: [],
  InputPublication: [],
  InputHeroImage: [],
  InputNews: [],
  InputTender: [],
  InputVacancy: [],
  InputReport: [],
  InputPartner: [],
  InputExecutive: [],
  InputBoard: [],

  outputHeroGallery: [],
  outputGallery: [],
  outputNews: [],
  outputLegal: [],
  outputTender: [],
  outputVacnacy: [],
  outputReport: [],
  outputPartner: [],
  outputBoard: [],
  outputExecutive: [],

  InputDeleteHeroImage: [],
  InputDeleteImage: [],
  InputDeleteNews: [],
  InputDeleteReport: [],
  InputDeleteLegal: [],
  InputDeleteVacancy:[],
  InputDeleteTender: [],
  InputDeletePartner: [],
  InputDeleteBoard: [],
  InputDeleteExecutive: [],
};

const MediaStore = createSlice({
  name: "media",
  initialState: initialState,
  reducers: {
    setHeroImageData(state) {},
    setHeroImage(state, action) {
      const newData = action.payload;
      state.InputHeroImage.push({
        ImageName: newData.ImageName,
        image: newData.image,
      });
    },
    setNewsData(state) {},
    setNews(state, action) {
      const newData = action.payload;
      state.InputNews.push({
        newsTitle: newData.newsTitle,
        description: newData.description,
        image: newData.image,
      });
    },

    setGalleryData(state) {},
    setGallery(state, action) {
      const newData = action.payload;
      state.InputGallery.push({
        ImageName: newData.ImageName,
        image: newData.image,
      });
    },
    setPublicationData(state) {},
    setPublication(state, action) {
      const newData = action.payload;
      state.InputPublication.push({
        ImageName: newData.ImageName,
        image: newData.image,
      });
    },
    setTenderData(state) {},
    setTender(state, action) {
      const newData = action.payload;
      state.InputTender.push({
        TenderTitle: newData.TenderTitle,
        description: newData.description,
        image: newData.image,
      });
    },
    setReportData(state) {},
    setReport(state, action) {
      const newData = action.payload;
      state.InputReport.push({
        ReportName: newData.ReportName,
        image: newData.image,
      });
    },
    setVacancyData(state) {},
    setVacancy(state, action) {
      const newData = action.payload;
      state.InputVacancy.push({
        Vacancy_Number: newData.Vacancy_Number,
        Position: newData.Position,
        Category: newData.Category,
        Qualification: newData.Qualification,
        CGPA: newData.CGPA,
        Total_Experience: newData.Total_Experience,
        Career_level: newData.Career_level,
        Purpose_of_the_Job: newData.Purpose_of_the_Job,
        Company_Profile: newData.Company_Profile,
        Generic_Functions: newData.Generic_Functions,
        Specific_Functions: newData.Specific_Functions,
        Place_of_work: newData.Place_of_work,
        Note: newData.Note,
        Experience: newData.Experience,
        Employment_Type: newData.Employment_Type,
        DeadLine: newData.DeadLine,
      });
    },
    setPartnerData(state) {},
    setPartner(state, action) {
      const newData = action.payload;
      state.InputPartner.push({
        PartnerName: newData.PartnerName,
        image: newData.image,
      });
    },
    getHeroGalleryData(state) {},
    getHeroGallery(state, action) {
      state.outputHeroGallery = action.payload;
    },
    getGalleryData(state) {},
    getGallery(state, action) {
      state.outputGallery = action.payload;
    },
    getNewsData(state) {},
    getNews(state, action) {
      state.outputNews = action.payload;
    },
    getLegalData(state) {},
    getLegal(state, action) {
      state.outputLegal = action.payload;
    },

    getTenderData(state) {},
    getTender(state, action) {
      state.outputTender = action.payload;
    },
    getReportData(state) {},
    getReport(state, action) {
      state.outputReport = action.payload;
    },
    getVacancyData(state) {},
    getVacancy(state, action) {
      state.outputVacnacy = action.payload;
    },
    getPartnerData(state) {},
    getPartner(state, action) {
      state.outputPartner = action.payload;
    },
    setDeleteHeroImageData(state) {},
    setDeleteHeroImage(state, action) {
      const newData = action.payload;
      state.InputDeleteHeroImage.push({
        _id: newData._id,
      });
    },
    setDeletePartnerData(state) {},
    setDeletePartner(state, action) {
      const newData = action.payload;
      state.InputDeletePartner.push({
        _id: newData._id,
      });
    },
    setDeleteReportData(state) {},
    setDeleteReport(state, action) {
      const newData = action.payload;
      state.InputDeleteReport.push({
        _id: newData._id,
      });
    },
    setDeleteLegalData(state) {},
    setDeleteLegal(state, action) {
      const newData = action.payload;
      state.InputDeleteLegal.push({
        _id: newData._id,
      });
    },
    setDeleteVacancyData(state) {},
    setDeleteVacancy(state, action) {
      const newData = action.payload;
      state.InputDeleteVacancy.push({
        _id: newData._id,
      });
    },
    setDeleteTenderData(state) {},
    setDeleteTender(state, action) {
      const newData = action.payload;
      state.InputDeleteTender.push({
        _id: newData._id,
      });
    },
    setDeleteNewsData(state) {},
    setDeleteNews(state, action) {
      const newData = action.payload;
      state.InputDeleteNews.push({
        _id: newData._id,
      });
    },
    setDeleteImageData(state) {},
    setDeleteImage(state, action) {
      const newData = action.payload;
      state.InputDeleteImage.push({
        _id: newData._id,
      });
    },
    setEditNewsData(state) {},
    setEditNews(state, action) {
      const newData = action.payload;
      state.InputNews.push({
        _id: newData._id,
        newsTitle: newData.newsTitle,
        description: newData.description,
      });
    },
    setEditPublicationData(state) {},
    setEditPublication(state, action) {
      const newData = action.payload;
      state.InputPublication.push({
        _id: newData._id,
        reportName: newData.reportName,
      });
    },
    setEditTenderData(state) {},
    setEditTender(state, action) {
      const newData = action.payload;
      state.InputTender.push({
        TenderTitle: newData.TenderTitle,
        description: newData.description,
        _id: newData._id,
      });
    },
    setEditReportData(state) {},
    setEditReport(state, action) {
      const newData = action.payload;
      state.InputReport.push({
        ReportName: newData.ReportName,
        _id: newData._id,
      });
    },
    setEditVacancyData(state) {},
    setEditVacancy(state, action) {
      const newData = action.payload;
      state.InputVacancy.push({
        _id: newData._id,
        Vacancy_Number: newData.Vacancy_Number,
        Position: newData.Position,
        Category: newData.Category,
        Qualification: newData.Qualification,
        CGPA: newData.CGPA,
        Total_Experience: newData.Total_Experience,
        Career_level: newData.Career_level,
        Purpose_of_the_Job: newData.Purpose_of_the_Job,
        Company_Profile: newData.Company_Profile,
        Generic_Functions: newData.Generic_Functions,
        Specific_Functions: newData.Specific_Functions,
        Place_of_work: newData.Place_of_work,
        Note: newData.Note,
        Experience: newData.Experience,
        Employment_Type: newData.Employment_Type,
        DeadLine: newData.DeadLine,
      });
    },

    setExecutiveData(state) {},
    setExecutive(state, action) {
      const newData = action.payload;
      state.InputExecutive.push({
        FullName: newData.FullName,
        Position: newData.Position,
        image: newData.image,
      });
    },
    setEditExecutiveData(state) {},
    setEditExecutive(state, action) {
      const newData = action.payload;
      state.InputExecutive.push({
        _id: newData._id,
        FullName: newData.FullName,
        Position: newData.Position,
      });
    },
    setBoardData(state) {},
    setBoard(state, action) {
      const newData = action.payload;
      state.InputBoard.push({
        FullName: newData.FullName,
        Position: newData.Position,
        image: newData.image,
      });
    },
    setEditBoardData(state) {},
    setEditBoard(state, action) {
      const newData = action.payload;
      state.InputBoard.push({
        _id: newData._id,
        FullName: newData.FullName,
        Position: newData.Position,
      });
    },
    getBoardData(state) {},
    getBoard(state, action) {
      state.outputBoard = action.payload;
    },
    getExecutiveData(state) {},
    getExecutive(state, action) {
      state.outputExecutive = action.payload;
    },
    setDeleteBoardData(state) {},
    setDeleteBoard(state, action) {
      const newData = action.payload;
      state.InputDeleteBoard.push({
        _id: newData._id,
      });
    },
    setDeleteExecutiveData(state) {},
    setDeleteExecutive(state, action) {
      const newData = action.payload;
      state.InputDeleteExecutive.push({
        _id: newData._id,
      });
    },
  },
});

export const {
  setExecutiveData,
  setExecutive,
  setEditExecutiveData,
  setEditExecutive,
  setBoardData,
  setBoard,
  setEditBoardData,
  setEditBoard,
  getBoardData,
  getBoard,
  getExecutiveData,
  getExecutive,
  setHeroImageData,
  setDeleteBoardData,
  setDeleteBoard,
  setDeleteExecutiveData,
  setDeleteExecutive,
  setHeroImage,
  setNewsData,
  setNews,
  setGalleryData,
  setGallery,
  setPublicationData,
  setPublication,
  setTenderData,
  setTender,
  setReportData,
  setReport,
  setVacancyData,
  setVacancy,
  setPartnerData,
  setPartner,

  getHeroGalleryData,
  getHeroGallery,
  getGalleryData,
  getGallery,
  getNewsData,
  getNews,
  getLegalData,
  getLegal,
  getTenderData,
  getTender,
  getVacancyData,
  getVacancy,
  getReportData,
  getReport,
  getPartnerData,
  getPartner,

  setDeleteHeroImageData,
  setDeleteHeroImage,
  setDeleteImageData,
  setDeleteImage,
  setDeleteNewsData,
  setDeleteNews,
  setDeleteReportData,
  setDeleteReport,
  setDeleteLegalData,
  setDeleteLegal,
  setDeleteVacancyData,
  setDeleteVacancy,
  setDeleteTenderData,
  setDeleteTender,
  setDeletePartnerData,
  setDeletePartner,

  setEditNewsData,
  setEditNews,
  setEditPublicationData,
  setEditPublication,
  setEditTenderData,
  setEditTender,
  setEditReportData,
  setEditReport,
  setEditVacancyData,
  setEditVacancy,
} = MediaStore.actions;

export default MediaStore.reducer;
