import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShoppingListScreen from "./screens/ShoppingList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/shoppingList",
    element: <ShoppingListScreen />,
  },
]);

function App() {
  return (
    <Container className="mb-5" fluid>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
