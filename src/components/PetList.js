import React from "react"
import axios from "axios";
import PetCard from "./PetCard";
import StickyMenu from "./StickyMenu";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import {saveAs} from "file-saver";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FF9999;

  min-height: 100vh;
`

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

class PetList extends React.Component {

    componentDidMount() {
        axios.get(`http://eulerity-hackathon.appspot.com/pets`)
            .then(res => {
                this.props.onGetData(res.data)
            })
    }

    downloadImages() {
        this.props.info.map((item, i) => {
            if (item.isChecked) {
                saveAs(item.url, "pet" + i + ".jpg")
            }
        })
    }

    render() {
        //console.log("renderList")
        const {info, onSelect, onSelectAll, onClearAll, onFilter} = this.props
        return (
            <Wrapper>
                <SearchBar filterSet={text => onFilter(text)}/>
                <StickyMenu selectAll={() => onSelectAll()} clearAll={() => onClearAll()}
                            downloadImage={() => this.downloadImages()}/>
                <CardList>
                    {info.map((item, i) => {
                        return <PetCard imageUrl={item.url} title={item.title} desc={item.desc} willShow={item.willShow}
                                        key={i} type={i % 3} index={i} checkChange={index => onSelect(index)}
                                        isChecked={item.isChecked}/>
                    })}
                </CardList>
            </Wrapper>
        );
    }

}

export default PetList;