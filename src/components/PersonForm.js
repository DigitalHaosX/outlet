import React, { useState } from "react";
import { useParams, useNavigate, Outlet, Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import BaseData from "./BaseData";
import Address from "./Address";
import Studies from "./Studies";

const PersonForm = ({ person }) => {
  const { id } = useParams();
  /*   const navigate = useNavigate(); // Hook to navigate programmatically
  const [activeSection, setActiveSection] = useState("base-data"); */

  // Function to handle section change
  /* const handleSectionChange = (section) => {
    setActiveSection(section);
    navigate(`/person/${id}/${section}`); // Update URL based on section
  };
 */
  // Function to render the appropriate section based on activeSection state
  /*  const renderSection = () => {
    if (!person) return null;
    if (activeSection === "base-data") {
      return <BaseData person={person} />;
    } else if (activeSection === "address") {
      return <Address person={person} />;
    } else if (activeSection === "studies") {
      return <Studies person={person} />;
    } else {
      return null;
    }
  }; */

  return (
    <Form initialValues={person}>
      {/* Buttons to switch between sections */}
      <Link to={"base-data"}>
        {/* <Button type="primary" onClick={() => handleSectionChange("base-data")}>
        BASE DATA
      </Button> */}{" "}
        CLICK Base Data
      </Link>
      <Link to={"address"}>
        {/* <Button type="primary" onClick={() => handleSectionChange("address")}>
        ADDRESS
      </Button> */}{" "}
        CLICK Address
      </Link>
      {/*  <Button type="primary" onClick={() => handleSectionChange("studies")}>
        STUDIES
      </Button> */}
      <Outlet />

      {/* Render the active section */}
      {/*   {renderSection()} */}

      {/* Additional fields shared across sections */}
    </Form>
  );
};

export default PersonForm;
