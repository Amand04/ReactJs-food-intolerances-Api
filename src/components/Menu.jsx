import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
  const intolerances = useParams();
  const [menu, setMenu] = useState();

  useEffect(() => {
    (async function () {
      const url =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=65b0f5e6be504f05b03bcec15f6a2f88&intolerances=" +
        intolerances;

      const response = await fetch(url);
      const menuItems = await response.json();

      setMenu(menuItems.results);
      console.log(menuItems);
    })();
  }, [intolerances]);

  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Menu;
