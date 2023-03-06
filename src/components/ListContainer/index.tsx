import React from "react";
import { ListGroup } from "react-bootstrap";
import { IMealComplete } from "../../types";
import ListItem from "../ListItem";
import RandomBoxForm from "../RandomBoxForm";

interface Props {
  groupId: string;
  title: string;
}

const ListContainer: React.FC<Props> = ({ groupId, title }) => {
  const meals: IMealComplete[] = [
    {
      name: "fish",
      checked: false,
      ingredients: [
        { name: "salmon", checked: false, category: "meat", count: 1 },
      ],
    },
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
