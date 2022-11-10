import { useEffect, useState } from "react";
import "../App.css";
import MealRandom from "../components/MealRandom";
import Menu from "../components/Menu";

const App = () => {
  const [mealRandom, setMealRandom] = useState([]);

  useEffect(() => {
    (async function () {
      const url =
        "https://api.spoonacular.com/recipes/random?apiKey=65b0f5e6be504f05b03bcec15f6a2f88";

      const response = await fetch(url);
      const mealRandomApi = await response.json();
      setMealRandom(mealRandomApi.recipes[0]);
      console.log(mealRandom);
    })();
  }, []);

  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <footer>
        <MealRandom mealRandom={mealRandom} />
      </footer>
    </div>
  );
};

export default App;
