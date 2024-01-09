import axios from "axios";

export const postNews = async (data) => {
  //newsTitle description image

  const response = await axios.post(
    "http://localhost:5001/media/postNews",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post news");
  }
};
export const postExecutive = async (data) => {
  //FullName Position image
console.log(data);
  const response = await axios.post(
    "http://localhost:5001/media/postExecutive",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post Board");
  }
};
export const postBoard = async (data) => {
  //FullName Position image

  const response = await axios.post(
    "http://localhost:5001/media/postBoard",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post Board");
  }
};

export const postPartners = async (data) => {
  //PartnerName
  // image

  const response = await axios.post(
    "http://localhost:5001/media/postPartners",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post partners");
  }
};

export const postPhotos = async (data) => {
  //ImageName
  // image

  const response = await axios.post(
    "http://localhost:5001/media/postPhotos",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post photos");
  }
};

export const postHero = async (data) => {
  //ImageName
  // image

  const response = await axios.post(
    "http://localhost:5001/media/postHero",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post hero image");
  }
};

export const postReport = async (data) => {
  //ReportName
  // report
  const response = await axios.post(
    "http://localhost:5001/media/postReport",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post report");
  }
};

export const postDocument = async (data) => {
  // DocumentName
  // document

  const response = await axios.post(
    "http://localhost:5001/media/postDocument",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post documet");
  }
};

export const postTender = async (data) => {
  // tenderTitle,description

  const response = await axios.post(
    "http://localhost:5001/media/postTender",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to post tender");
  }
};

// Create a vacancy
export const createVacancy = async (data) => {
  //  Vacancy_Number
  // Position
  // Category
  // Qualification
  // CGPA
  // Total_Experience
  // Career_level
  // Purpose_of_the_Job
  // Company_Profile
  // Generic_Functions
  // Specific_Functions
  // Place_of_work
  // Note
  // Experience
  // Employment_Type
  // DeadLine
  console.log(data);
  const response = await axios.post(
    "http://localhost:5001/media/Createvacancies",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.href = "/private/geezbank/vacancy";
    return response.data;
  } else {
    throw new Error("Failed to create vacancy");
  }
};

// Update a vacancy by ID
export const updateVacancyById = async (data) => {
  // id,
  // position,
  // qualification,
  // Place_of_work,
  // Experience,
  // Employment_Type,
  // Salary,
  // DeadLine,
  const response = await axios.post(
    "http://localhost:5001/media/updateVacancies",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.href = "/private/geezbank/vacancy";
    return response.data;
  } else {
    throw new Error("Failed to update vacancy by ID");
  }
};

// Delete a vacancy by ID
export const deleteVacancyById = async (data) => {
  // _id
  const response = await axios.post(
    "http://localhost:5001/media/deleteVacancies",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete vacancy by ID");
  }
};

// Get all vacancies
export const getAllVacancies = async () => {
  const response = await axios.get(
    "http://localhost:5001/media/getAllVacancies"
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch all vacancies");
  }
};

// Create, update, and delete functions for other routes

// Update news by ID
export const updateNewsById = async (data) => {
  // _id,newsTitle,description
  const response = await axios.post(
    "http://localhost:5001/media/updateNews",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update news by ID");
  }
};

// Delete news by ID
export const deleteNewsById = async (data) => {
  //_id
  const response = await axios.post(
    "http://localhost:5001/media/deleteNews",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete news by ID");
  }
};

export const deleteExecutiveById = async (data) => {
  //_id
  const response = await axios.post(
    "http://localhost:5001/media/deleteExecutive",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete Executive by ID");
  }
};
export const deleteBoardById = async (data) => {
  //_id
  const response = await axios.post(
    "http://localhost:5001/media/deleteBoard",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete Executive by ID");
  }
};
//update Board by Id

export const updateBoardById = async (data) => {
  //_id, FullName Position
  const response = await axios.post(
    "http://localhost:5001/media/updateBoard",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update board by ID");
  }
};

// Update executive by ID

export const updateExecutiveById = async (data) => {
  //_id,FullName Position
  const response = await axios.post(
    "http://localhost:5001/media/updateExecutive",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update executive by ID");
  }
};


// Update partner by ID
export const updatePartnerById = async (data) => {
  //_id,partnername
  const response = await axios.post(
    "http://localhost:5001/media/updatePartner",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update partner by ID");
  }
};

// Delete partner by ID
export const deletePartnerById = async (data) => {
  //_id
  const response = await axios.post(
    "http://localhost:5001/media/deletePartner",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete partner by ID");
  }
};

// Update gallery by ID
export const updateGalleryById = async (data) => {
  //_id,imagename
  const response = await axios.post(
    "http://localhost:5001/media/updateGallery",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update gallery by ID");
  }
};

// Delete gallery by ID
export const deleteGalleryById = async (data) => {
  // _id
  console.log(data);
  const response = await axios.post(
    "http://localhost:5001/media/deleteGallery",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete gallery by ID");
  }
};

// Update hero by ID
export const updateHeroById = async (data) => {
  // _id,ImageName
  const response = await axios.post(
    "http://localhost:5001/media/updateHero",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update hero by ID");
  }
};

// Delete hero by ID
export const deleteHeroById = async (data) => {
  // _id
  const response = await axios.post(
    "http://localhost:5001/media/deleteHero",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete hero by ID");
  }
};

// Update report by ID
export const updateReportById = async (data) => {
  // _id,reportName
  const response = await axios.post(
    "http://localhost:5001/media/updateReport",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update report by ID");
  }
};

// Delete report by ID
export const deleteReportById = async (data) => {
  // _id
  const response = await axios.post(
    "http://localhost:5001/media/deleteReport",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete report by ID");
  }
};

// Update document by ID
export const updateDocumentById = async (data) => {
  // _id,reportName
  const response = await axios.post(
    "http://localhost:5001/media/updateDocument",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update document by ID");
  }
};

// Delete document by ID
export const deleteDocumentById = async (data) => {
  // _id
  const response = await axios.post(
    "http://localhost:5001/media/deleteDocument",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete document by ID");
  }
};

// Update tender by ID
export const updateTenderById = async (data) => {
  // _id,tenderTitle, description
  const response = await axios.post(
    "http://localhost:5001/media/updateTender",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to update tender by ID");
  }
};

// Delete tender by ID
export const deleteTenderById = async (data) => {
  // _id
  const response = await axios.post(
    "http://localhost:5001/media/deleteTender",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 200) {
    window.location.reload(true);
    return response.data;
  } else {
    throw new Error("Failed to delete tender by ID");
  }
};

// Continue to create functions for other media upload routes as needed

export const getAllNews = async () => {
  const response = await axios.get("http://localhost:5001/media/getNews");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch news");
  }
};
export const getAllBoard = async () => {
  const response = await axios.get("http://localhost:5001/media/getBoard");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch Board");
  }
};
export const getAllExecutive = async () => {
  const response = await axios.get("http://localhost:5001/media/getExecutive");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch Executive");
  }
};


export const getAllPartners = async () => {
  const response = await axios.get("http://localhost:5001/media/getPartners");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch partners");
  }
};

export const getAllGallery = async () => {
  const response = await axios.get("http://localhost:5001/media/getGallery");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch gallery");
  }
};

export const getAllHero = async () => {
  const response = await axios.get("http://localhost:5001/media/getHero");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch hero image");
  }
};

export const getAllLegal = async () => {
  const response = await axios.get("http://localhost:5001/media/getDocument");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};
export const getAllReport = async () => {
  const response = await axios.get("http://localhost:5001/media/getReport");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};

export const getAlltender = async () => {
  const response = await axios.get("http://localhost:5001/media/getTender");

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};

// Create similar functions for other media retrieval routes as needed
