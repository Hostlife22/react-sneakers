import { useContext, useState } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context/context';
import styles from './Card.module.scss';

const Card = ({
  onFavorite,
  onPluse,
  id,
  imageUrl,
  title,
  price,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, imageUrl, title, price };

  const onClickPlus = () => {
    onPluse(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={189}
          viewBox="0 0 150 189"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="3" ry="3" width="150" height="90" />
          <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="125" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="154" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            {onFavorite && (
              <img
                src={
                  isFavorite ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'
                }
                alt="Unliked"
              />
            )}
          </div>
          <img width={133} height={112} src={imageUrl} alt="Sneaker" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPluse && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
