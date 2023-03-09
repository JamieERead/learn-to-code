import React from "react";
import { Badge } from "react-bootstrap";
import { useAppSelector } from "../../hooks/redux";
import { getTotalCheckedIngredients } from "../../redux/shopping/shoppingSelector";

const ProgressCounter = () => {
  const count = useAppSelector(getTotalCheckedIngredients);
  const total = `${count.checked} / ${count.total}`;
  return (
    <h3 className="mb-4 mt-4">
      Items Complete
      <Badge
        bg={count.checked === count.total ? "success" : "secondary"}
        className="ms-4"
      >
        {total}
      </Badge>
    </h3>
  );
};

export default ProgressCounter;
