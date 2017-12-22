import { h } from 'preact';

export const Gallery = (props) => {
  let {title} = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
