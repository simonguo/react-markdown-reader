import React from 'react';

class Markdown extends React.Component {
  constructor() {
    super()
    this.createMarkup = this.createMarkup.bind(this);
  }
  createMarkup() {
    return { __html: this.props.children };
  }
  render() {
    return (
      <div
        dangerouslySetInnerHTML={this.createMarkup()}
        className={this.props.className || 'markdown'}
      />
    );
  }
}


export default Markdown;
