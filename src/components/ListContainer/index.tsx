import React from "react";
import { ListGroup } from "react-bootstrap";
import ListItem from "../ListItem";
import RandomBoxForm from "../RandomBoxForm";

interface Props {
  groupId: string;
  title: string;
}

const ListContainer: React.FC<Props> = ({ groupId, title }) => {
  const meals = [
    { name: "fish", count: 1, checked: false },
    { name: "chips", count: 5, checked: true },
  ];

  const onHandleChange = () => {};

  const onPickRandomMeal = () => {};

  return (
    <div>
      <h2 className="mt-4">{title}</h2>
      <RandomBoxForm
        onPickRandomMeal={onPickRandomMeal}
        maxLength={10} // TODO update and pass in the actual length
      />
      <ListGroup>
        {meals.map((meal) => (
          <ListItem
            onHandleChange={onHandleChange}
            key={meal.name}
            meal={meal}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default ListContainer;
