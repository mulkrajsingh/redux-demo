import React, { Component } from 'react'
import { connect } from "react-redux";

import { buyCake } from '../redux'

class NewCakeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        }
    }

    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        let { numOfCakes, buyCake } = this.props;
        let { number } = this.state;
        return (
            <div>
                <h2>
                    Number of cakes - {numOfCakes}
                </h2>
                <input
                    type="text"
                    name="number"
                    value={number}
                    placeholder="Enter num of cake to buy"
                    onChange={(event) => this.onChangeHandler(event)}
                />
                <button onClick={() => buyCake(number)}>
                    Buy {number} Cake
            </button>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        numOfCakes: state.cake.numOfCakes
    }
)

const mapDispatchToProps = dispatch => (
    {
        buyCake: (number) => dispatch(buyCake(number))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)