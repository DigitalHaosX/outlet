import React from "react";
import { Input, Form } from "antd";

const Address = ({ person }) => {
  return (
    <Form initialValues={person}>
      <Form.Item label="Address">
        <Input placeholder="input placeholder" value={'person.address'} />
      </Form.Item>
    </Form>
  );
};

export default Address;
