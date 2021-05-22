##四.路由组件与一般组件
    1.写法不同：
       一般组件：<Demo/>
       路由组件：<Route path="/about" component={About} />
    2.存放位置不同：
       一般组件：components
       路由组件：pages
    3.接受到的props不同：
       一般组件：写组件标签时传递了什么，就能收到什么
       路由组件：接受到三大固定属性
            history:
                go: ƒ go(n)    能规定跳转的页数 go(2)  正数前进2页  负数后退
                goBack: ƒ goBack()   回退
                goForward: ƒ goForward()   前进
                push: ƒ push(path, state)   push跳转,留下痕迹
                replace: ƒ replace(path, state)   replace跳转，不留下痕迹
            location:
                pathname: "/home"
                search: ""
                state: undefined
            match:
                params: {}
                path: "/home"
                url: "/home"

##五.NavLink与封装NavLink
    1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    2.标签体内容是一个特殊的标签属性
    3.通过this.props.children可以获得标签体内容

##六.Switch的使用、
    1.通常情况下，component和path是一一对应关系、
    2.Switch可以提高路由匹配效率（单一匹配）

##七.解决多级路径刷新页面样式丢失的问题(/su/about)
    1.public/index.html 中 引入样式时不写./写/ （常用）
    2.public/index.html 中引入样式时不写./写%PUBLIC_URL%（绝对路径）（常用）(只适用react脚手架)
    3.使用HashRouter

##八.路由的严格匹配和模糊匹配
    1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
    2.开启严格匹配：<Route exact={true} path="/about" component={About} />
    3.严格匹配不要随便开启，需要再开，有的时候开启会导致无法继续匹配二级路由

##九.Redirect的使用
    1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
    2.具体编码：<Switch>
                     <Route  path="/about" component={About} />
                     <Route  path="/home" component={Home} />
                     <Redirect to="about" />
                </Switch>

##十.路由的嵌套
    1.注册子路由时要写上父路由的path值
    2.路由的匹配是按照注册路由的顺序进行的

##十一.向路由组件传递参数
    1.params参数
        路由链接（携带参数）：<Link to=`/demo/test/tom/18`>详情</Link>
        注册路由（声明接收）：<Route path="/demo/test/:name:age" component={Text} />
        接收参数：const {params参数} = this.props.match.params
    2.search参数
        路由链接（携带参数）：<Link to={`dome/test?name=tom&age=18`}>详情</Link>
        注册路由（无需声明，正常注册即可）：<Route path="/demo/test" component={test} />
        接收参数：const {serach参数} = this.props.location
        备注：获取到search是urlencoded编码字符串，需要借助qureystring解析
    3.state参数
        路由链接（携带参数）：<Link to={{pathname:'/demo/test',state:{name:tom,age:18}}}>详情</Link>
        注册路由（无需声明，正常注册即可）：<Route path="/demo/test" component={test} />
        接收参数：const {name,age(state参数)} = this.props.location.state
        备注：刷新也可以保留住参数

##十二.BrowserRouter与HashRouter的区别
    1.底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本，
        HashRouter使用的是URL的哈希值
    2.path表现形式不一样
        BrowserRouter的路径中没有#，例如：localhost:3000/demo/test
        HashRouter的路径包含#，例如：localhost:3000/#/demo/test
    3.刷新后对路由state参数的影响
        （1）.BrowserRouter没有任何影响，因为state保存在history对象中
        （2）.HashRouter刷新后导致路由state参数的丢失！！！！
    4.备注：HashRouter可以用于解决一些路径错误相关的问题。
