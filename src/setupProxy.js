const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ //����/api1ǰ׺�����󣬾ͻᴥ���ô�������
            target :'http://localhost:5000', //����ת����˭
            changeOrigin:true, //���Ʒ������յ�������ͷ��Host��ֵ
            pathRewrite:{'^/api1':''} //��д����·�������룩
        }),
    )
}

