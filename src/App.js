import React from "react";
import styled from "styled-components";
import { Component } from "react";
import Camisa from "./image/camisa.png";

const Button1 = styled.button`
  color: white;
  background-color: grey;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  position: absolute;
  right: 5%;

  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    font-size: 1em;
  }
`;

const Text = styled.h1`
  text-align: center;
`;

const Button2 = styled.button`
  color: white;
  background-color: grey;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  position: absolute;
  left: 5%;

  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
    font-size: 1em;
  }
`;

const Camisatime = styled.img`
  width: 30em;
  height: 30em;
`;

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Numero = styled.h1`
  position: absolute;
  left: 49%;
  top: 30%;
  font-size: 5em;
`;

export default class App extends Component {
  state = {
    numero: 0
  };
  adicionar = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  remover = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <>
        <Text> Escolha seu número </Text>
        <AllContainer>
          <Camisatime src={Camisa} />
          <div className="App">
            <Numero> {this.state.numero} </Numero>
            <Button1 onClick={this.adicionar}> + </Button1>
            <Button2 onClick={this.remover}> - </Button2>
          </div>
        </AllContainer>
      </>
    );
  }
}