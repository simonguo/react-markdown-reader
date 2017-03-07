const React = require('react');
const Markdown = React.createClass({
    createMarkup: function () {
        return { __html: this.props.children };
    },
    render: function () {

        return (
            <div
                dangerouslySetInnerHTML={this.createMarkup() }
                className={this.props.className || 'markdown'}
                />
        );
    }
});

export default Markdown;