import React, { Component } from 'react';
import PropTypes from 'prop-types'

const DEFAULT_CLASSNAME = 'section';

class Section extends Component {
  static displayName = 'Section';
  static propTypes = {
    children: PropTypes.node,
    label: PropTypes.string
  };


  render() {
    return (
      <div className={`${DEFAULT_CLASSNAME}__section`}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;