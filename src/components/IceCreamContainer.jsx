import React, { Component } from 'react'
import { connect } from "react-redux";

import { buyIceCream } from '../redux';

class IceCreamContainer extends Component {
    render() {
        let { numberOfIceCream, buyIceCream } = this.props;
        return (
            <div>
                <h1>
                    Number od IceCream - {numberOfIceCream}
                </h1>
                <button onClick={buyIceCream}>
                    Buy IceCream
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
)

const mapDispatchToProps = dispatch => (
    {
        buyIceCream: () => dispatch(buyIceCream()),
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer);