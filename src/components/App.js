// This is our wrapper component
import React from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Loading from './common/Loading';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <main role="main">
                    {this.props.loading ? (
                        <Loading marginTop={250} />
                    ) : (
                        this.props.children
                    )}
                </main>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);