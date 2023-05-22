// EditFlavour komponentti flavour datan päivittämiseksi

// Tuodaan tarvittavat moduulit
import React, { useState, useEffect } from "react";
import axios from "axios";
import FlavourForm from "./FlavourForm";

// Luodaan EditFlavour komponentti
const EditFlavour = (props) => {
  const [formValues, setFormValues] = useState({
    flavour: "",
    description: "",
    image: "",
  });

  //onSubmit handler
  const onSubmit = (flavourObject) => {
    axios
      .put("/update/:Id", flavourObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Flavour successfully updated");
          props.history.push("/getall");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get("/update/:Id")
      .then((res) => {
        const { flavour, description, image } = res.data;
        setFormValues({ flavour, description, image });
      })
      .catch((err) => console.log(err));
  }, []);

  // Palautetaam flavour lomake
  return (
    <FlavourForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Flavour
    </FlavourForm>
  );
};

// Eksportoidaan EditFlavour komponentti
export default EditFlavour;
