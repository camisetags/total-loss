// @flow
import * as React from 'react';
import type { CardUserProps } from '../props';

export const UserLabel = (props: CardUserProps): React.Node => (
  <div>
    <h1>{props.content.name}</h1>
    <hr />
    <p>{props.content.description}</p>
    <p className="score">Score:{props.content.score}</p>
  </div>
);

export const UserInput = (props: CardUserProps): React.Node => (
  <div>
    <form onSubmit={props.handleSubmit} id={props.content.id}>
      <input type="text" name="name" />
      <hr />
      <input type="text" name="description" />
      <input className="button-submit" type="submit" value="Salvar" />
      <p className="score">Score:{props.content.score}</p>
    </form>
  </div>
);

export default UserLabel;
