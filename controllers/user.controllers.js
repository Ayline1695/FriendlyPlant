const Plants = require("../models/Plants.model");

const deleteFormOptions = (plantsId) => ({
  action: `/user/profile/${plantsId}`,
  btnText: "delete plants",
  method: "POST",
  restMethod: "DELETE",
});

function plantsWithDeleteOptions(plants) {
  const deleteOptions = deleteFormOptions(plants._id);
  return {
    ...plants,
    ...deleteOptions,
  };
}

const getPlants = async (req, res) => {
  try {
    const plants = await Plants.find().lean();
    const plantsWithOptions = plants.map(plantsWithDeleteOptions);
    res.render("plants", { plants: plantsWithOptions });
  } catch (err) {
    console.error(err);
  }
};

const editFormOptions = (plantsId) => ({
  action: `/plants/${plantsId}`,
  btnText: "edit plant",
  method: "POST",
  restMethod: "PATCH",
});

const getPlant = async (req, res) => {
  try {
    const { plantsId } = req.params;
    const plants = await Plants.findById(plantsId).lean();
    res.render("details", {
      ...editFormOptions(plantsId),
      ...plants,
    });
  } catch (err) {
    console.error(err);
  }
};

const createPlants = async (req, res) => {
  try {
    const { name, image, description } = req.body;
    const plants = await Plants.create({ name, image, description });
    console.log("plants", plants);
    res.redirect("/plants");
  } catch (err) {
    console.error(err);
  }
};

const updatePlants = async (req, res) => {
  try {
    const { plantsId } = req.params;
    const { name, image, description } = req.body;
    const updatedplants = await Plants.findByIdAndUpdate(plantsId, {
      name,
      image,
      description,
    });
    res.redirect(`/list/${plantsId}`);
  } catch (err) {
    console.log(err);
  }
};

const deletePlants = async (req, res) => {
  try {
    const { plantsId } = req.params;
    const deletedplants = await Plants.findByIdAndDelete(plantsId);
    console.log("deleted plants", deletedplants);
    res.redirect("/list");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getPlants,
  getPlant,
  createPlants,
  updatePlants,
  deletePlants,
};