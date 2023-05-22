// CreateFlavour komponentti uuden jäätelömaun luomiseen

// Tuodaan moduulit
import React, { useState } from "react";
import axios from "axios";
import FlavourForm from "./FlavourForm.js";

// CreateFlavour komponentti
const CreateFlavour = () => {
  const [formValues] = useState({
    flavour: "",
    description: "",
    image: "",
  });
  // onSubmit handler
  const onSubmit = (flavourObject) => {
    axios
      .post("/add", flavourObject)
      .then((res) => {
        if (res.status === 200) alert("Flavour successfully created");
        else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Return flavour form
  return (
    <FlavourForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Flavour
    </FlavourForm>
  );
};

// Eksportoidaan CreateFlavour komponentti
export default CreateFlavour;
