import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    width: 18vw;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
  }

  overflow: hidden;

  width: 18vw;
  aspect-ratio: 0.63;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 20px;

  margin: 1vw;

  background: ${props => props.type === 1 ? "#CCFF66" : props.type === 2 ? "#66CCCC" : "#FFCC00"}
}

;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.type === 1 ? "#666699" : props.type === 2 ? "#FFFFFF" : "#993366"}
`

const PetTitle = styled.p`
  margin: 5% 0 2% 0;
  padding: 0 15% 0 15%;
  font-size: 3vh;
`

const PetDesc = styled.i`
  padding: 0 15% 0 15%;
`

class PetCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper type={this.props.type}>
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