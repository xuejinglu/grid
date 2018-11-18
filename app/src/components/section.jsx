import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './section.css';

const DEFAULT_CLASSNAME = 'section';

class Section extends Component {
  static displayName = 'Section';
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string
  };


  render() {
    return (
      <div className={DEFAULT_CLASSNAME}>
        <div className={`${DEFAULT_CLASSNAME}__label`}>{this.props.label}</div>
        {this.props.children}
      </div>
    );
  }
}

export default Section;