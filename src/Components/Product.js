import React, { Component } from "react";
import styled from "styled-components";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.prod,
      likes: 0,
      updated: false,
    };
    this.addLikes = this.addLikes.bind(this);
  }
  componentDidUpdate = () => {
    console.log("i have updated !");
  };

  componentDidMount = () => {
    console.log("i have mounted");
  };

  componentWillUnmount = () => {
    console.log("i have unmounted");
  };

  addLikes() {
    this.setState((oldstate) => ({
      likes: oldstate.likes + 1,
    }));
  }

  render() {
    return (
      <div>
        <ProductFrame>
          <ProductImageWrapper>
            <ProductImage src={this.props.prod.img}></ProductImage>
            <ProductInfoWrapper>{this.props.prod.name}</ProductInfoWrapper>
            <ProductInfoWrapper>{this.props.prod.price}</ProductInfoWrapper>
            <ProductInfoWrapper>like :</ProductInfoWrapper>
          </ProductImageWrapper>
        </ProductFrame>
      </div>
    );
  }
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;
