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
    constructor(props) {
        super(props);
        this.state = {
            petInfo: []
        }
        this.checked = null;
        this.titles = null;
        this.urls = null;
        this.descs = null;
    }

    componentDidMount() {
        axios.get(`http://eulerity-hackathon.appspot.com/pets`)
            .then(res => {
                const rawData = res.data
                this.checked = rawData.map((item, i) => false)
                this.titles = rawData.map(item => item['title'].toLowerCase())
                this.descs = rawData.map(item => item['description'].toLowerCase())
                this.urls = rawData.map(item => item['url'])
                this.props.onGetData(res.data)
            })
    }

    checkPet(index) {
        this.checked[index] = !this.checked[index];
        this.props.onSelect(index);
    }

    selectAll() {
        for (let i = 0; i < this.checked.length; i += 1) {
            this.checked[i] = true
        }
        this.props.onSelectAll()
    }

    clearAll() {
        for (let i = 0; i < this.checked.length; i += 1) {
            this.checked[i] = false
        }
        this.props.onClearAll()
    }

    downloadImages() {
        for (let i = 0; i < this.checked.length; i += 1) {
            if (this.checked[i]) {
                saveAs(this.urls[i], "pet" + i + ".jpg")
            }
        }
    }

    render() {
        //console.log("renderList")
        const {info, onSelectAll, onClearAll, onFilter} = this.props
        return (
            <Wrapper>
                <SearchBar filterSet={text => onFilter(text)}/>
                <StickyMenu selectAll={() => this.selectAll()} clearAll={() => this.clearAll()}
                            downloadImage={() => this.downloadImages()}/>
                <CardList>
                    {info.map((item, i) => {
                        return <PetCard imageUrl={item.url} title={item.title} desc={item.desc} willShow={item.willShow}
                                        key={i} type={i % 3} index={i} checkChange={index => this.checkPet(index)}
                                        isChecked={item.isChecked}/>
                    })}
                </CardList>
            </Wrapper>
        );
    }

}

export default PetList;