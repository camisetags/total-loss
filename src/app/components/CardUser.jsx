// @flow
import * as React from 'react';
import type { CardUserProps } from './props';

const CardUser = (props: CardUserProps): React.Element<*> => (
  <div className="card card-center">
    <h1>{props.content.name}</h1>
    <p>{props.content.description}</p>
    <hr />
    {props.content.score}
  </div>
);

export default CardUser;
