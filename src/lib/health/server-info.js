const request = require("../request.js");
module.exports = function(){
    return new Promise((resolve,reject)=>{
        request.call(this,{path:"/ethereum/server_info"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            reject(err);
        })
    })  
}