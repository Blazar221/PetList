import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;

  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  width: 4vw;
  aspect-ratio: 1;

  background: url(${props => props.type === "download" ? "./download.svg" : props.type === "selectAll" ? "./select-all.svg" : "./clear-all.svg"});
  background-size: cover;

  border: none;

  &:hover {
    background: url(${props => props.type === "download" ? "./download-hover.svg" : props.type === "selectAll" ? "./select-all-hover.svg" : "./clear-all-hover.svg"});
    background-size: cover;
  }
`

class StickyMenu extends React.Component {
    constructor(props) {
        super(props);
        this.selectAllFunc = this.selectAllFunc.bind(this);
        this.clearAllFunc = this.clearAllFunc.bind(this)
    }

    selectAllFunc() {
        this.props.selectAll()
    }

    clearAllFunc() {
        this.props.clearAll()
    }

    render() {
        return <Wrapper>
            <Button type="download" title="download"/>
            <Button type="selectAll" title="selectAll" onClick={this.selectAllFunc}/>
            <Button type="clearAll" title="clearAll" onClick={this.clearAllFunc}/>
        </Wrapper>
    }

}

export default StickyMenu;