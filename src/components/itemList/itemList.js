import React, { Component } from "react";
import styled from "styled-components";
import Spinner from "../spinner";

const ItemListBlock = styled.ul`
  li {
    cursor: pointer;
  }
`;

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    console.log(this.props);

    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;

      // const label = this.props.renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {item.name}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return (
      <ItemListBlock className="item-list list-group">{items}</ItemListBlock>
    );
  }
}
