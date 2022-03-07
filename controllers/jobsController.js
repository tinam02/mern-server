const createJob = async (req, res) => {
  res.send("cccreate job");
};
const deleteJob = async (req, res) => {
  res.send("deleteJob job");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs job");
};

const updateJob = async (req, res) => {
  res.send("updateJob job");
};

const showStats = async (req, res) => {
  res.send("showStats job");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
