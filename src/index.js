import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('cl1');
    return element;
  }
  
  document.body.appendChild(component());