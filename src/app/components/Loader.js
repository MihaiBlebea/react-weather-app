const React = require('react');

class Loader extends React.Component {
    render() {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
                <div className="loader-text">Loading...</div>
            </div>
        );
    }
}

module.exports = Loader
