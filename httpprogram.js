const net = require('net');

const server = net.createServer();

server.on("connection", (client) => {
    console.log("有客户端连上了")
    client.on("data", (data) => {
        // console.log(data.toString());
        // client.write("HTTP/1.1 200 OK\n")
        // client.write("Content-type:text/html;charset=utf-8\n\n");      //content-type
        // client.write('<h1>welcome</h1><a href="/admin">进入入管理理后台</a>')
        var data=data.toString();
        var index=data.indexOf("\n");
        var st=data.substring(0,index).trim();
        const [method,url,version] = st.split(" ");
        var str=data.split(" ");
        if(url == '/'){
            
            client.write("HTTP/1.1 200 OK\n")
            client.write("Content-type:text/html;charset=utf-8\n\n");      //content-type
            client.write('<h1>welcome</h1><a href="/admin">进入入管理理后台</a>')
        }
        if(url =='/admin'){
            let length = parseInt(str.length) 
            let endline = str[length-1]
            var checkstr= new Array()
            checkstr = endline.split("=")
            // console.log(`${url}`)
            // client.write("HTTP/1.1 302 OK\n")
            // client.write("Location: /login\n\n");
            if(checkstr[0] == "SESSID"){
                client.write('HTTP/1.1 200 OK\n')
                client.write('Content-Type: text/html;charset=UTF-8\n\n')
                client.write(checkstr[1]) 
            }else{
                //没有cookie就跳转到/login
                client.write('HTTP/1.1 302 OK \n')
                client.write('Content-Type: text/html;charset=UTF-8\n')
                client.write('Location:http://127.0.0.1:8001/login\n\n')
            }    
            client.end()        
        }
         if(url=='/login'){
             if(method=="GET"){

                 client.write("HTTP/1.1 200 OK\n")
                 client.write("Content-type:text/html;charset=utf-8\n\n");
                 client.write('<form method="post" action="http://localhost:8001/login">\n')
                 client.write('username：<input type="text" name="username" id="user">\n')
                 client.write('<br>')
                 client.write('password：<input type="password" name="pwd" id="pass" ><br>\n')
                 client.write('<input type="submit" id="sub" value="登录">\n')
                 client.write('</form>')
             }
             else if(method=="POST" && url=="/login"){
                let length = parseInt(str.length)
                console.log(str)
                let endline= str[length-1]
                let array1= new Array() 
                let np = new Array()  //账号密码的数组
                let strran = '' //随机数
                array1 = endline.split("username=")
                console.log(array1)
                np = array1[1].split("&pwd=")
                console.log(np);
                if ((np[0] == 'admin')&&(np[1]=='123456')) {
                    let total = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
                    for(key in total ){
                        let num = Math.ceil(Math.random()*13)
                        strran += total[num]
                    }
                        client.write('HTTP/1.1 302 OK \n')
                        client.write('Content-Type: text/html; charset = UTF-8\n')
                        client.write(`Set-Cookie: SESSID=${strran}\n`)
                        client.write('Location: http://127.0.0.1:8001/admin \n\n')
                        client.end()
                    }
                }
            
        }
        client.end()
    })
})

server.listen(8001, () => {
    console.log('服务器已启动');
})        