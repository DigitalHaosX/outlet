import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "antd";
import { persons } from "./modules/persons";
import PersonForm from "./PersonForm";

const PersonsList = () => {
  const { id } = useParams();
  const selectedPerson = persons.find((person) => person.id === parseInt(id));

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <h2 style={{ color: "blue", border: "1px solid blue", padding: "5px" }}>
          Lista Persoane
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul>
            {persons.map((person) => (
              <li key={person.id}>
                <Link to={`/person/${person.id}`}>
                  {person.id}
                  {""}
                  {person.name} {person.surname}
                  {person.score}
                  {person.team}
                  {person.address}
                  {person.studies}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col span={12}>
        <h2 style={{ color: "red", border: "1px solid red", padding: "5px" }}>
          Detalii Persoana
        </h2>
        {id && selectedPerson ? (
          <PersonForm person={selectedPerson} />
        ) : (
          <h3>
            There is no Person selected, please click on the names from the Left
            Side
          </h3>
        )}
      </Col>
    </Row>
  );
};

export default PersonsList;
