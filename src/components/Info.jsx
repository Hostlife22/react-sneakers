import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/context';

const Info = ({ image, title, description }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="basket" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <Link to="/">
        <button className="greenButton" onClick={() => setCartOpened(false)}>
          <img src="img/arrow.svg" alt="Arrow" /> Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
