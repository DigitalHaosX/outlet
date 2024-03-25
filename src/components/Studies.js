import React from "react";
import { Input, Form } from "antd";

const Studies = ({ person }) => {
  return (
    <Form initialValues={person}>
      <Form.Item label="Studies">
        <Input placeholder="input placeholder" value={person.studies} />
      </Form.Item>
    </Form>
  );
};

export default Studies;
