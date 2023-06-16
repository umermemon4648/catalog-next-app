import React from 'react';
import styles from '../app/page.module.css';

interface Catalog {
  thumb: string[];
}

interface ThumbProps {
  items: Catalog[];
  currentIndex: number;
  handleClick: (index: number) => void;
}

const Thumbs: React.FC<ThumbProps> = ({ items, currentIndex, handleClick }) => {
  return (
    <>
      {items.map((catalog, idx) => (
        <span
          id={idx.toString()}
          key={idx}
          data-testid={'thumb-button-' + idx}
          onClick={() => handleClick(idx)}
        >
          <span
            className={`inline-flex w-90 pa-4 ${styles['image-thumb']} ${
              idx === currentIndex ? styles['thumb-selected'] : ''
            }`}
          >
            <span
              className={`mx-5 ${styles.thumb}`}
              id={idx.toString()}
              style={{ backgroundImage: 'url(' + catalog.thumb + ')' }}
            />
          </span>
        </span>
      ))}
    </>
  );
};

export default Thumbs;
