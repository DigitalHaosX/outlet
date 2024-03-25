// BaseDataForm.js
import React from "react";
import { Input, Form } from "antd";

const BaseData = ({ person }) => {
  return (
    <Form initialValues={person}>
      <Form.Item label="First Name">
        <Input placeholder="input placeholder" value={"person.name"} />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input placeholder="input placeholder" value={"person.surname"} />
      </Form.Item>
    </Form>
  );
};

export default BaseData;
