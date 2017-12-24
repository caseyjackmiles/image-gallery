import { h } from 'preact';
import { Image } from './image.jsx';

export const Gallery = ({title, images}) => {
  return (
    <div>
      {title &&
        <h1>{title}</h1>
      }
    </div>
  );
};
