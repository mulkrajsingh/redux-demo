import React from 'react'
import { connect } from "react-redux";
import { buyCake, buyIceCream } from '../redux';

function ItemContainer({ item, buyItem, itemName }) {
    return (
        <div>
            <h2>
                Item - {item}
            </h2>
            <button
                onClick={buyItem}
            >
                Buy {itemName}
            </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => (
    {
        item:
            (ownProps.cake
                ? state.cake.numOfCakes
                : state.iceCream.numberOfIceCream
            ),
        state: state
    }
)

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        buyItem: ownProps.cake
            ? () => dispatch(buyCake())
            : () => dispatch(buyIceCream()),
        itemName: ownProps.cake
            ? "cake"
            : "IceCream"
    }
)

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ItemContainer)
