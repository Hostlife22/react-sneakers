import React from 'react';
import Card from '../components/Card';

const Home = ({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems =
      items &&
      items.filter(({ title }) =>
        title.toLowerCase().includes(searchValue.toLowerCase())
      );

    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={onAddToFavorite}
        onPluse={onAddToCart}
        {...item}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between ">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex align-center">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Clear"
              onClick={() => setSearchValue('')}
            />
          )}
          <input
            type="text"
            placeholder="Поиск..."
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className="homeContent d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
