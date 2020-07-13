import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
    render() {
        return (
            <div>
                <button>Click ME!!</button>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(mapStateToProps)(Input);