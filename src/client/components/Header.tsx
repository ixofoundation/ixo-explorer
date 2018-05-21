import * as React from 'react';

var styles = {
    header: {
        'color': 'white'
    }
};

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" style={styles.header} href="/">ixo Blockchain Explorer</a>
            </nav>
        );
    }
}

export default Header;