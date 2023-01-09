import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavourite,
    removeFavourite,
  };

  return (
    <FavoritesContext.Provider {...{ value }}>
      {children}
    </FavoritesContext.Provider>
  );
}
