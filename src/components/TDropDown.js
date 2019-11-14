import React, { Component } from 'react';
import './TDropDown.css'

class TDropDown extends Component {
  render() {
    return (
      <select onChange={(e) => this.setBackgroundColor(e.target.value)} >
          <option value="#1E88E5" >
            Blue
          </option>
          <option value="#43A047" > 
            Green
          </option>
          <option value="#E53935" >
              Red
          </option>
      </select>
    );
  }

  setBackgroundColor(color){
    document.documentElement.style.setProperty('--test-color', color);
  }
}

export default TDropDown;
