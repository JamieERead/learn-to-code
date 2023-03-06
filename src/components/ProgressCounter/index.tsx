import React from "react";
import { Badge } from "react-bootstrap";

interface Props {
  count: {
    total: number;
    checked: number;
  };
}

const ProgressCounter: React.FC<Props> = ({ count }) => {
  const total = `${count.checked} / ${count.total}`;
  return (
    <h3 className="mb-4 mt-4">
      Items Complete
      <Badge bg="secondary" className="ms-4">
        {total}
      </Badge>
    </h3>
  );
};

export default ProgressCounter;
