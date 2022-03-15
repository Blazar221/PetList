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
    }

    render() {
        return <Wrapper>
            <Button type="download" title="download"/>
            <Button type="selectAll" title="selectAll"/>
            <Button type="clearAll" title="clearAll"/>
        </Wrapper>
    }

}

export default StickyMenu;