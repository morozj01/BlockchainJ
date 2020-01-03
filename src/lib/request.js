const request = require("request-promise-native");

module.exports = function myRequest(options,retryCount){
    return new Promise((resolve,reject)=>{
        if(!retryCount) retryCount = 1;   
        options.hash = this.hash;
        request({
            method:"POST",
            url:this.baseUrl+options.path,
            body:options,
            json:true
        }).then((value)=>{
            resolve(value);
            }).catch(err=>{
                if(err.statusCode == 404) return reject(err.error);
                else if(err.statusCode == 401) return reject(new Error("Failed to authenticate. Hash invalid"))
                else if(err.statusCode >= 500){
                    if (retryCount < this.maxRetries) {
                        const timeout =  2^retryCount+Math.ceil(Math.random() * (1000 - 1) + 1);
                        const library = this; 
                        setTimeout(function(){
                            myRequest.call(library,options,retryCount+1)
                        },timeout);
                    }else{
                        //console.log(err.error)
                        return reject({error:err.error, message:new Error("API server error. Please contact and administrator")});
                    }
                }  
                else reject({error:err.error, message:new Error(err.error.message)});
            })
        });
}