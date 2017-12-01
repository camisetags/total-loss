// @flow
import * as React from 'react';
import type { SideButtonProps } from '../props';

const SideButtons = (props: SideButtonProps): React.Node => {
  const { onClickAddUserHandler, onClickRemoveUserHandler } = props;
  return (
    <div className="side-buttons">
      <div role="presentation" onClick={onClickAddUserHandler} className="seta-para-cima" />
      <p className="number-users">{props.users.length}</p>
      <div role="presentation" onClick={onClickRemoveUserHandler} className="seta-para-baixo" />
    </div>
  );
};

export default SideButtons;
