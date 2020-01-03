const request = require("../request.js");
module.exports = function(){
    return new Promise((resolve,reject)=>{
        request.call(this,{path:"/v1/users/get_fields"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            reject(err);
        })
    })  
}