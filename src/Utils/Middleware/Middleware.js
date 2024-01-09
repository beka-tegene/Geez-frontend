import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { Login, SignUp, resetpassword } from "../API/AuthApi";
import {
  setChangePasswordData,
  setContactUsData,
  setLoginData,
  setRegisterData,
} from "../Store/AuthStore";
import {
  setEducationalInformationData,
  setPersonalInformationData,
  setWorkInformationData,
} from "../Store/UserStore";
import {
  Educational_Status,
  PersonalInfo,
  Sendfeedback,
  WorkExperience,
} from "../API/UserApi";
import {
  createVacancy,
  deleteBoardById,
  deleteDocumentById,
  deleteExecutiveById,
  deleteGalleryById,
  deleteHeroById,
  deleteNewsById,
  deletePartnerById,
  deleteReportById,
  deleteTenderById,
  getAllBoard,
  getAllExecutive,
  getAllGallery,
  getAllHero,
  getAllLegal,
  getAllNews,
  getAllPartners,
  getAllReport,
  getAllVacancies,
  getAlltender,
  postBoard,
  postDocument,
  postExecutive,
  postHero,
  postNews,
  postPartners,
  postPhotos,
  postReport,
  postTender,
  updateBoardById,
  updateDocumentById,
  updateExecutiveById,
  updateNewsById,
  updateReportById,
  updateTenderById,
  updateVacancyById,
} from "../API/mediaApi";
import {
  getBoard,
  getExecutive,
  getGallery,
  getHeroGallery,
  getLegal,
  getNews,
  getPartner,
  getReport,
  getTender,
  getVacancy,
  setBoardData,
  setDeleteBoardData,
  setDeleteExecutiveData,
  setDeleteHeroImageData,
  setDeleteImageData,
  setDeleteLegalData,
  setDeleteNewsData,
  setDeletePartnerData,
  setDeleteReportData,
  setDeleteTenderData,
  setEditBoardData,
  setEditExecutiveData,
  setEditNewsData,
  setEditPublicationData,
  setEditReportData,
  setEditTenderData,
  setEditVacancyData,
  setExecutiveData,
  setGalleryData,
  setHeroImageData,
  setNewsData,
  setPartnerData,
  setPublicationData,
  setReportData,
  setTenderData,
  setVacancyData,
} from "../Store/MediaStore";

export function* watchFetchGeez() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setContactUs", fetchSetContactUs);
  yield takeLatest("auth/setLogin", fetchSetLogin);
  yield takeLatest("auth/setChangePassword", fetchSetChangePassword);

  yield takeLatest("user/setPersonalInformation", fetchSetPersonalInformation);
  yield takeLatest(
    "user/setEducationalInformation",
    fetchSetEducationalInformation
  );
  yield takeLatest("user/setWorkInformation", fetchSetWorkInformation);

  yield takeLatest("media/setHeroImage", fetchSetHeroImage);
  yield takeLatest("media/setNews", fetchSetNews);
  yield takeLatest("media/setGallery", fetchSetGallery);
  yield takeLatest("media/setPublication", fetchSetPublication);
  yield takeLatest("media/setTender", fetchSetTender);
  yield takeLatest("media/setReport", fetchSetReport);
  yield takeLatest("media/setVacancy", fetchSetVacancy);
  yield takeLatest("media/setPartner", fetchSetPartner);

  yield takeLatest("media/getHeroGalleryData", fetchGetHeroGallery);
  yield takeLatest("media/getGalleryData", fetchGetGallery);
  yield takeLatest("media/getNewsData", fetchGetNews);
  yield takeLatest("media/getLegalData", fetchGetLegal);
  yield takeLatest("media/getTenderData", fetchGetTender);
  yield takeLatest("media/getVacancyData", fetchGetVacancy);
  yield takeLatest("media/getReportData", fetchGetReport);
  yield takeLatest("media/getPartnerData", fetchGetPartner);

  yield takeLatest("media/setDeleteHeroImage", fetchSetDeleteHeroImage);
  yield takeLatest("media/setDeleteImage", fetchSetDeleteImage);
  yield takeLatest("media/setDeleteNews", fetchSetDeleteNews);
  yield takeLatest("media/setDeleteReport", fetchSetDeleteReport);
  yield takeLatest("media/setDeleteLegal", fetchSetDeleteLegal);
  yield takeLatest("media/setDeleteTender", fetchSetDeleteTender);
  yield takeLatest("media/setDeletePartner", fetchSetDeletePartner);

  yield takeLatest("media/setEditNews", fetchSetEditNews);
  yield takeLatest("media/setEditPublication", fetchSetEditDocument);
  yield takeLatest("media/setEditTender", fetchSetEditTender);
  yield takeLatest("media/setEditReport", fetchSetEditReport);
  yield takeLatest("media/setEditVacancy", fetchSetEditVacancy);

  yield takeLatest("media/setExecutive", fetchSetExecutive);
  yield takeLatest("media/setEditExecutive", fetchSetEditExecutive);
  yield takeLatest("media/setDeleteExecutive", fetchSetDeleteExecutive);
  yield takeLatest("media/getExecutiveData", fetchGetExecutive);
  yield takeLatest("media/setBoard", fetchSetBoard);
  yield takeLatest("media/setEditBoard", fetchSetEditBoard);
  yield takeLatest("media/setDeleteBoard", fetchSetDeleteBoard);
  yield takeLatest("media/getBoardData", fetchGetBoard);

}

// Authentication and Authorization data

function* fetchSetRegister(action) {
  try {
    yield call(SignUp, action.payload);
    yield setRegisterData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetLogin(action) {
  try {
    yield call(Login, action.payload);
    yield setLoginData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetContactUs(action) {
  try {
    yield call(Sendfeedback, action.payload.data);
    yield setContactUsData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetPersonalInformation(action) {
  try {
    yield call(PersonalInfo, action.payload);
    yield setPersonalInformationData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEducationalInformation(action) {
  try {
    yield call(Educational_Status, action.payload);
    yield setEducationalInformationData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetWorkInformation(action) {
  try {
    yield call(WorkExperience, action.payload);
    yield setWorkInformationData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetHeroImage(action) {
  try {
    yield call(postHero, action.payload);
    yield setHeroImageData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetNews(action) {
  try {
    yield call(postNews, action.payload);
    yield setNewsData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetGallery(action) {
  try {
    yield call(postPhotos, action.payload);
    yield setGalleryData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetPublication(action) {
  try {
    yield call(postDocument, action.payload);
    yield setPublicationData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetTender(action) {
  try {
    yield call(postTender, action.payload);
    yield setTenderData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetReport(action) {
  try {
    yield call(postReport, action.payload);
    yield setReportData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetVacancy(action) {
  try {
    yield call(createVacancy, action.payload.data);
    yield setVacancyData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetChangePassword(action) {
  try {
    yield call(resetpassword, action.payload);
    yield setChangePasswordData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetPartner(action) {
  try {
    yield call(postPartners, action.payload);
    yield setPartnerData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetDeleteHeroImage(action) {
  try {
    yield call(deleteHeroById, action.payload.data);
    yield setDeleteHeroImageData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchSetDeleteImage(action) {
  try {
    yield call(deleteGalleryById, action.payload.data);
    yield setDeleteImageData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchSetDeleteNews(action) {
  try {
    yield call(deleteNewsById, action.payload.data);
    yield setDeleteNewsData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchSetDeleteReport(action) {
  try {
    yield call(deleteReportById, action.payload.data);
    yield setDeleteReportData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetDeleteLegal(action) {
  try {
    yield call(deleteDocumentById, action.payload.data);
    yield setDeleteLegalData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchSetDeleteTender(action) {
  try {
    yield call(deleteTenderById, action.payload.data);
    yield setDeleteTenderData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetDeletePartner(action) {
  try {
    yield call(deletePartnerById, action.payload.data);
    yield setDeletePartnerData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchGetHeroGallery(action) {
  try {
    const data = yield call(getAllHero);
    yield put(getHeroGallery(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchGetGallery(action) {
  try {
    const data = yield call(getAllGallery);
    yield put(getGallery(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchGetNews(action) {
  try {
    const data = yield call(getAllNews);
    yield put(getNews(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchGetLegal(action) {
  try {
    const data = yield call(getAllLegal);
    yield put(getLegal(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchGetTender(action) {
  try {
    const data = yield call(getAlltender);
    yield put(getTender(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchGetReport(action) {
  try {
    const data = yield call(getAllReport);
    yield put(getReport(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
function* fetchGetVacancy(action) {
  try {
    const data = yield call(getAllVacancies);
    yield put(getVacancy(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchGetPartner(action) {
  try {
    const data = yield call(getAllPartners);
    yield put(getPartner(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditNews(action) {
  try {
    yield call(updateNewsById, action.payload);
    yield setEditNewsData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditDocument(action) {
  try {
    yield call(updateDocumentById, action.payload.data);
    yield setEditPublicationData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditTender(action) {
  try {
    yield call(updateTenderById, action.payload.data);
    yield setEditTenderData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditReport(action) {
  try {
    yield call(updateReportById, action.payload.data);
    yield setEditReportData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditVacancy(action) {
  try {
    yield call(updateVacancyById, action.payload.data);
    yield setEditVacancyData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
// ****************************************************************************************************************

function* fetchSetExecutive(action) {
  try {
    yield call(postExecutive, action.payload);
    yield setExecutiveData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditExecutive(action) {
  try {
    yield call(updateExecutiveById, action.payload);
    yield setEditExecutiveData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetDeleteExecutive(action) {
  try {
    yield call(deleteExecutiveById, action.payload.data);
    yield setDeleteExecutiveData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchGetExecutive(action) {
  try {
    const data = yield call(getAllExecutive);
    yield put(getExecutive(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetBoard(action) {
  try {
    yield call(postBoard, action.payload);
    yield setBoardData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetEditBoard(action) {
  try {
    yield call(updateBoardById, action.payload);
    yield setEditBoardData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchSetDeleteBoard(action) {
  try {
    yield call(deleteBoardById, action.payload.data);
    yield setDeleteBoardData();
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}

function* fetchGetBoard(action) {
  try {
    const data = yield call(getAllBoard);
    yield put(getBoard(data));
  } catch (error) {
    toast.error(error.response.data.msg);
    console.error("Saga Error:", error);
  }
}
