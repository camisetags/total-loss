import { Component } from 'react';
import getMobileOperatingSystem from '../utils/operating';

class BaseComponent extends Component {
  handleVibrate() {
    if(getMobileOperatingSystem() !== "iOS"){
      window.navigator.vibrate([100]);
    }
  }
}

export default BaseComponent;
