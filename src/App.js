import React,{Component} from 'react'
import Search from './Components/Search/Search.js'
import List from './Components/List/List.js'

export default class App extends Component{
    state = {
        users:[],
        isFirst:true,
        isLoading:false
    }
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
    render(){
        return(
            <div className="container">
                <Search updateAppState ={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
