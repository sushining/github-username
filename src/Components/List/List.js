import React,{Component} from 'react'
import './List.css'

export default class List extends Component{
    render(){
        const {users,isFirst,isLoading} = this.props
        return(
            <div className="row">
            {
                isFirst ? <h2>欢迎使用hithub搜索引擎,输入关键字,点击搜索</h2> :
                isLoading ? <h2>Loading....</h2> :
                users.map((userObj)=>{
                return(
                        <div className="card" key={userObj.id}>
                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                            </a>
                            <p className="card-text">{userObj.login}</p>
                        </div>
                )
            })
            }
            </div>
        )
    }
}
