// @flow
import * as React from 'react';
import type { CardUserProps } from '../props';
import { UserLabel, UserInput } from './cardComponents';

const CardUser = (props: CardUserProps): React.Element<*> => (
  <div className="card card-center">
    <i
      role="presentation"
      id={props.content.id}
      onClick={props.onClickEditUser}
      className="edit-icon"
    />
    {props.content.inputChange ? <UserInput {...props} /> : <UserLabel {...props} />}
  </div>
);

export default CardUser;
