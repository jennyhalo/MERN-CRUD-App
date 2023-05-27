// Tuodaan tarvittavat moduulit
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// Luodaan FlavourTableRow
const FlavourTableRow = (props) => {
  const { flavour, description, image } = props.obj;

  const deleteFlavour = () => {
    axios
      .delete("http://localhost:5000/api/delete/:Id")
      .then((res) => {
        if (res.status === 200) {
          alert("Flavour successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <tr>
      <td>{flavour}</td>
      <td>{description}</td>
      <td>{image}</td>
      <td>
        <Link className="edit-link" to={"http://localhost:5000/api/update/:Id"}>
          Edit
        </Link>
        <Button onClick={deleteFlavour} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default FlavourTableRow;
