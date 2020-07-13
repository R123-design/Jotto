import React from 'react';
import { connect } from 'react-redux';

class Input extends React.Component {
    render() {
        return (
            <div>
                Input
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {};
}

export default connect(mapStateToProps)(Input);