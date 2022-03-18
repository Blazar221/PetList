import PetListHeader from "./components/PetListHeader";
import PetList from "./components/PetList";
import {Provider, connect} from "react-redux";
import {createStore} from "@reduxjs/toolkit";

//Action & ActionCreator
const selectActionCreator = (i) => {
    return {type: 'select', payload: i}
}
const getDataActionCreator = (data) => {
    return {type: 'getData', payload: data}
}
const filterActionCreator = (text) => {
    return {type: 'filter', payload: text}
}
const selectAllAction = {type: 'selectAll'}
const clearAllAction = {type: 'clearAll'}

//InitialState
const initialState = {info: []}

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'getData':
            return {
                info: action.payload.map(item => {
                    return {
                        title: item["title"],
                        desc: item["description"],
                        url: item["url"],
                        willShow: true,
                        isChecked: false
                    }
                })
            }
        case 'select':
            const i = action.payload
            let nextInfo = [...state.info]
            nextInfo[i].isChecked = !nextInfo[i].isChecked
            return {info: nextInfo}
        case 'filter':
            const text = action.payload.toLowerCase()
            return {
                info: state.info.map(item => {
                    return {
                        ...item,
                        willShow: item.title.toLowerCase().includes(text) | item.desc.toLowerCase().includes(text)
                    }
                })
            }
        case 'selectAll':
            return {
                info: state.info.map(item => {
                    return {
                        ...item,
                        isChecked: true
                    }
                })
            }
        case 'clearAll':
            return {
                info: state.info.map(item => {
                    return {
                        ...item,
                        isChecked: false
                    }
                })
            }
        default:
            return state
    }
}

// Store
const store = createStore(reducer)

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        info: state.info
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onGetData: (data) => dispatch(getDataActionCreator(data)),
        onSelect: (index) => dispatch(selectActionCreator(index)),
        onFilter: (text) => dispatch(filterActionCreator(text)),
        onSelectAll: () => dispatch(selectAllAction),
        onClearAll: () => dispatch(clearAllAction),
    }
}

// Connected Component
const PetListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetList)

function App() {
    return (
        <div className="App">
            <PetListHeader/>
            <Provider store={store}>
                <PetListContainer/>
            </Provider>
        </div>
    );
}

export default App;
