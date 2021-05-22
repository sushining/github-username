import React,{Component} from 'react'
import axios from 'axios'

export default class Search extends Component{
    search = ()=>{
        //获取用户名的输入（连续解构赋值+重命名）
        const {keyWordElenent:{value:keyWord}} = this
        this.props.updateAppState({isFirst:false,isLoading:true})
        //发送请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response =>{
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error =>{console.log("失败了",error);}
        )
    }
    render(){
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                     <div>
                        <input ref= {c => this.keyWordElenent =c } type="text" placeholder="输入关键字点击搜索"/>&nbsp;
                        <button onClick={this.search}>搜索</button>
                    </div>
            </section>
        )
    }
}