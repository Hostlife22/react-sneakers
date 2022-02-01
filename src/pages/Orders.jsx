import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Info from '../components/Info';
import AppContext from '../context/context';

const Orders = () => {
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://617336c6110a740017222fd6.mockapi.io/api/v1/orders'
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказа');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>

      {!isLoading && orders.length <= 0 && (
        <Info
          title="У вас нет заказов"
          description="Оформите хотя бы один заказ."
          image="img/smile.svg"
        />
      )}
    </div>
  );
};

export default Orders;
