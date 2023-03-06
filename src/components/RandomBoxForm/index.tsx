import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface Props {
  maxLength: number;
  onPickRandomMeal: (value: string) => void;
}

const RandomBoxForm: React.FC<Props> = ({ maxLength, onPickRandomMeal }) => {
  const [value, setValue] = useState("1");
  return (
    <p>
      Pick
      <Form.Control
        style={{ display: "inline-block", width: "100px" }}
        className="ms-2 me-2"
        type="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        min={1}
        max={maxLength}
      />
      at
      <Button className="ms-2" onClick={() => onPickRandomMeal(value)}>
        Random
      </Button>
    </p>
  );
};

export default RandomBoxForm;
