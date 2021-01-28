import React, { Component } from "react";

import { connect } from "react-redux";
import { getAllItems } from "../redux/reducers";

import Item from "./Item";

class AllItems extends Component {
  // if we want all students to be displayed on button click only, comment out this function
  async componentDidMount() {
    await this.fetchAllItems();
  }

  async fetchAllItems() {
    await this.props.getAllItems();
    setTimeout(() => {
      console.log(this.props.items);
    }, 10);
  }

  render() {
    return (
      <div>
        <h1>All Items Component</h1>

        {/* arrow function below resloves "props" being underfined in fetchAllStudents, before: this.fetchAllStudents */}
        <button onClick={() => this.fetchAllItems()}>All Items</button>

        {this.props.items.items !== undefined ? (
          this.props.items.items.map((item, index) => (
            <Item key={index} name={item.name} />
          ))
        ) : (
          // Span used to represent nothing
          <span />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: () => dispatch(getAllItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);
