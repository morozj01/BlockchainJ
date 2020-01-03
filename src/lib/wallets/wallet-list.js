const request = require("../request.js");
module.exports = function(){
    return new Promise((resolve,reject)=>{
        request.call(this,{path:"/ethereum/wallets_list"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            reject(err);
        })
    })  
}