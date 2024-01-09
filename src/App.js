import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";

//Services and product
import LocalService from "./Pages/Service/LocalService";
import InternationalService from "./Pages/Service/InternationalService";
import LoanService from "./Pages/Service/LoanService";

// Vacancy page
import VacancyHome from "./Pages/Vacancy/VacancyHome";
import LoginVacancy from "./Pages/Vacancy/LoginVacancy";
import RegisterVacancy from "./Pages/Vacancy/RegisterVacancy";

//About Page
import AboutGeez from "./Pages/About/AboutGeez";
import OrgStructure from "./Pages/About/OrgStructure";
import BoardDirectors from "./Pages/About/BoardDirectors";
import ExeManagement from "./Pages/About/ExeManagement";
import Dashboard from "./Pages/Vacancy/Dashboard";
import VacancyApplied from "./Pages/Vacancy/VacancyApplied";
import InformationPersonal from "./Pages/Vacancy/InformationPersonal";
import PasswordChange from "./Pages/Vacancy/PasswordChange";
import ExchangeRete from "./Pages/ExchangeRete";
import FAQ from "./Pages/FAQ";
import AuthLogin from "./Components/Auth/AuthLogin";
import ManagementDashboard from "./Pages/Management/ManagementDashboard";
import ManagementAnnualReport from "./Pages/Management/ManagementAnnualReport";
import ManagementGallery from "./Pages/Management/ManagementGallery";
import ManagementHomeGallery from "./Pages/Management/ManagementHomeGallery";
import ManagementPublication from "./Pages/Management/ManagementPublication";
import ManagementTender from "./Pages/Management/ManagementTender";
import ManagementVacancy from "./Pages/Management/ManagementVacancy";
import ManagementNews from "./Pages/Management/ManagementNews";

//Media page
import News from "./Pages/Media/News";
import Gallery from "./Pages/Media/Gallery";
import DownloadAndPublications from "./Pages/Media/DownloadsAndPublications";
import Tenders from "./Pages/Media/Tenders";
import AnnualReport from "./Pages/Media/AnnualReport";
import ManagementVacancyUploader from "./Pages/Management/ManagementVacancyUploader";
import ManagementVacancyEdit from "./Pages/Management/ManagementVacancyEdit";
import Contact from "./Pages/Contact";
import ManagementBoardOfDirector from "./Pages/Management/ManagementBoardOfDirector";
import ManagementExecutiveManagement from "./Pages/Management/ManagementExecutiveManagement";
import ManagementPartnership from "./Pages/Management/ManagementPartnership";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/exchange-rete" element={<ExchangeRete />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact-us" element={<Contact />} />

      {/* Services and product */}
      <Route path="/local-service" element={<LocalService />} />
      <Route path="/international-service" element={<InternationalService />} />
      <Route path="/loan-service" element={<LoanService />} />

      {/* Vacancy */}
      <Route path="/vacancy" element={<VacancyHome />} />
      <Route path="/login" element={<LoginVacancy />} />
      <Route path="/register" element={<RegisterVacancy />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/applied-vacancy" element={<VacancyApplied />} />
      <Route path="/personal-information" element={<InformationPersonal />} />
      <Route path="/change-password" element={<PasswordChange />} />

      {/* About */}
      <Route path="/about-us" element={<AboutGeez />} />
      <Route path="/organization-structure" element={<OrgStructure />} />
      <Route path="/board-directors" element={<BoardDirectors />} />
      <Route path="/executive-management" element={<ExeManagement />} />

      {/* Media */}
      <Route path="news" element={<News />} />
      <Route path="gallery" element={<Gallery />} />
      <Route
        path="downloads-publications"
        element={<DownloadAndPublications />}
      />
      <Route path="tenders" element={<Tenders />} />
      <Route path="annual-report" element={<AnnualReport />} />

      {/* management page */}
      <Route path="/private/geezbank/login" element={<AuthLogin />} />
      <Route
        path="/private/geezbank/dashboard"
        element={<ManagementDashboard />}
      />
      <Route
        path="/private/geezbank/board-director"
        element={<ManagementBoardOfDirector />}
      />
      <Route
        path="/private/geezbank/executive-management"
        element={<ManagementExecutiveManagement />}
      />
      <Route
        path="/private/geezbank/partnership"
        element={<ManagementPartnership />}
      />

      <Route
        path="/private/geezbank/annual-report"
        element={<ManagementAnnualReport />}
      />
      <Route path="/private/geezbank/gallery" element={<ManagementGallery />} />
      <Route
        path="/private/geezbank/home-gallery"
        element={<ManagementHomeGallery />}
      />
      <Route path="/private/geezbank/news" element={<ManagementNews />} />
      <Route
        path="/private/geezbank/publication"
        element={<ManagementPublication />}
      />

      <Route path="/private/geezbank/tender" element={<ManagementTender />} />
      <Route path="/private/geezbank/vacancy" element={<ManagementVacancy />} />
      <Route
        path="/private/geezbank/edit-vacancy/:id"
        element={<ManagementVacancyEdit />}
      />
      <Route
        path="/private/geezbank/vacancy-uploader"
        element={<ManagementVacancyUploader />}
      />
    </Routes>
  );
}

export default App;
