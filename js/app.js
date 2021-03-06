/** @flow */

var MainComponent = require('./components/MainComponent');
var React = require('react');

var attachFastClick = require('fastclick');
attachFastClick(document.body);

React.render(
  <MainComponent />,
  document.getElementById('app')
);

// Enable react developer tools
if (typeof window !== 'undefined') {
  window.React = React;
}
