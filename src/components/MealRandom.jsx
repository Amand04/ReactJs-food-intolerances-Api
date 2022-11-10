const MealRandom = ({ mealRandom }) => {
  return (
    <>
      {mealRandom ? (
        <article>
          <h2>{mealRandom.title}</h2>
        </article>
      ) : (
        <p>Pas de recette</p>
      )}
    </>
  );
};
export default MealRandom;
