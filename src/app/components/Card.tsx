import * as React from 'react';

type CardProps = {
  content: {
    name: string,
    description: string,
  },
  children: React.ReactChild,
};

const Card = (props: CardProps) => (
  <div className="card card-center">
    <h1>{props.content.name}</h1>
    <p>{props.content.description}</p>
    <hr />
    {props.children}
  </div>
);

export default Card;
