import React from 'react';
import getMobileOperatingSystem from '../utils/operating';

export default class BaseComponent extends React.Compoenent {
  
  constructor(props) {
    super(props);
    throw new Error('BaseComponent cannot be instantiated directly.');
  }

  handleVibrate() {
    if(getMobileOperatingSystem() !== "iOS"){
      window.navigator.vibrate([200]);
    }
  }
}