import React from "react"
import axios from "axios";
import PetCard from "./PetCard";
import StickyMenu from "./StickyMenu";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FF9999;
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
        this.descs = null;
    }

    componentDidMount() {
        axios.get(`http://eulerity-hackathon.appspot.com/pets`)
            .then(res => {
                const rawData = res.data
                this.checked = rawData.map((item, i) => false)
                this.titles = rawData.map(item => item['title'].toLowerCase())
                this.descs = rawData.map(item => item['description'].toLowerCase())
                this.setState({
                    petInfo: rawData.map(item => {
                        return {
                            title: item["title"],
                            desc: item["description"],
                            url: item["url"],
                            willShow: true,
                            isChecked: false
                        }
                    })
                })
            })
    }

    checkPet(index) {
        this.checked[index] = !this.checked[index];
        let info = [...this.state.petInfo]
        info[index].isChecked = !info[index].isChecked

        this.setState({
            petInfo: info
        })
    }

    filterSet(text) {
        let textLower = text.toLowerCase();
        let willShow = []
        for (let i = 0; i < this.titles.length; i += 1) {
            if (this.titles[i].includes(textLower) || this.descs[i].includes(textLower)) {
                willShow.push(true)
            } else {
                willShow.push(false)
            }
        }
        let info = [...this.state.petInfo];
        for (let i = 0; i < info.length; i += 1) {
            info[i].willShow = willShow[i]
        }
        this.setState({
            petInfo: info
        })
    }

    selectAll() {
        let info = [...this.state.petInfo]
        for (let i = 0; i < info.length; i += 1) {
            info[i].isChecked = true
        }

        this.setState({
            petInfo: info
        })
    }

    clearAll() {
        let info = [...this.state.petInfo]
        for (let i = 0; i < info.length; i += 1) {
            info[i].isChecked = false
        }

        this.setState({
            petInfo: info
        })
    }

    render() {
        console.log("renderList")
        return (
            <Wrapper>
                <SearchBar filterSet={text => this.filterSet(text)}/>
                <StickyMenu selectAll={() => this.selectAll()} clearAll={()=>this.clearAll()}/>
                <CardList>
                    {this.state.petInfo.map((item, i) => {
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