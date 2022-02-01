import React, { useContext } from 'react';
import Card from '../components/Card';
import Info from '../components/Info';
import AppContext from '../context/context';

const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.length ? (
          favorites.map((item) => (
            <Card
              key={item.id}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))
        ) : (
          <Info
            title="Закладок нет :("
            description="Вы ничего не добавляли в закладки"
            image="img/sad-smile.svg"
          />
        )}
      </div>
    </div>
  );
};

export default Favorites;
