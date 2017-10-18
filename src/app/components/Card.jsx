// @flow
import * as React from 'react';

type CardProps = {
  content: {
    name: string,
    description: string,
  },
  children: React.Node,
};

const Card = (props: CardProps): React.Element<*> => (
  <div className="card card-center">
    <h1>{props.content.name}</h1>
    <p>{props.content.description}</p>
    <hr />
    {props.children}
  </div>
);

export default Card;
