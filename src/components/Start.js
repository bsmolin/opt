import React from 'react';
import { connect } from 'react-redux'
import { logIn } from "../actions";

class Start extends React.Component {
    componentDidMount() {
        this.props.logIn(true);
    }

    render() {
        return (
            <div>
                Start component
                {console.log(this.props.state)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    { logIn }
)(Start)