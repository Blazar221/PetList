import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.63);
  }
  
  img {
    width: 18vw;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
  }

  input {
    width: 30px;
    height: 30px;

    top: 10px;
    right: 10px;
    position: absolute;

    opacity: 0.7;
  }

  input:checked {
    opacity: 1.0;
  }

  display: ${props => props.willShow ? "block" : "none"};

  position: relative;

  overflow: hidden;

  width: 18vw;
  aspect-ratio: 0.63;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.2s;
  border-radius: 20px;

  margin: 1vw;

  background: ${props => props.type === 1 ? "#CCFF66" : props.type === 2 ? "#66CCCC" : "#FFCC00"};
`


const Content = styled.div
    `
      display: flex;
      flex-direction: column;

      color: ${props => props.type === 1 ? "#666699" : props.type === 2 ? "#FFFFFF" : "#993366"}
    `


const PetTitle = styled.p
    `
      margin: 5% 0 2% 0;
      padding: 0 15% 0 15%;
      font-size: 20px;
    `


const PetDesc = styled.i
    `
      padding: 0 15% 0 15%;
    `


class PetCard extends React.Component {
    constructor(props) {
        super(props);
        this.checkChange = this.checkChange.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.isChecked !== nextProps.isChecked || this.props.willShow !== nextProps.willShow;
    }

    checkChange() {
        this.props.checkChange(this.props.index)
    }

    render() {
        //console.log("renderCard");
        //console.log(this.props.isChecked)
        return (
            <Wrapper type={this.props.type} willShow={this.props.willShow} onClick={this.checkChange}>
                <input type="checkbox" onChange={this.checkChange} checked={this.props.isChecked}/>
                <img src={this.props.imageUrl} alt={this.props.title}/>
                <Content type={this.props.type}>
                    <PetTitle>{this.props.title}</PetTitle>
                    <PetDesc>{this.props.desc}</PetDesc>
                </Content>
            </Wrapper>
        );
    }

}

export default PetCard;