function requestData() {
    
    }
    
    requestData.prototype.setData = function(url, param) {
        this.hostname = url.slice(0, url.indexOf('/'));
        this.path = url.slice(url.indexOf('/'));
        this.param = param;
        this.http = require('http');
        this.querystring = require('querystring');
    }
    
    requestData.prototype.postData = function() {
        let result;
        
        let postData = this.querystring.stringify(this.param);
        let options = {  
            hostname: this.hostname,   
            path: this.path,  
            method: 'POST',  
            headers:{  
            //'Content-Type':'application/x-www-form-urlencoded',  
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',  
            'Content-Length':Buffer.byteLength(postData)  
            }  
        }  
        let req = this.http.request(options, function(res) {  
            console.log('httpCode:',res.statusCode);  
            console.log('header:',JSON.stringify(res.headers));  
            res.setEncoding('utf-8');  
            res.on('data',function(bodyData){  
                console.log('返回信息\r\n');
                result = bodyData;
                console.log(result);  
            });  
            res.on('end',function(){  
                console.log('请求结束');  
            });  
        });  
        req.on('error',function(err){  
            console.error(err);  
        });  
        req.write(postData);  
        req.end(); 
    
        return '123';
    }
    
    requestData.prototype.getData = function() {
        let content = this.querystring.stringify(this.param);  
        let options = {  
            hostname: this.hostname,  
            path: this.path,  
            method: 'GET'  
        }  
        //创建请求  
        let req = this.http.request(options,function(res){  
            console.log('httpCode:'+res.statusCode);  
            console.log('header:'+JSON.stringify(res.headers));  
            res.setEncoding('utf-8');  
            res.on('data',function(bodyData){  
                console.log('数据片段分隔-----------------------\r\n');  
                console.log(bodyData);  
            });  
            res.on('end',function(){  
                console.log('响应结束********');  
            });  
        });  
        req.on('error',function(err){  
            console.error(err);  
        });  
        req.end();
    }
    
    module.exports = requestData;