const request = require("../request.js");
module.exports = function(){
    return new Promise((resolve,reject)=>{
        request.call(this,{path:"/v1/users/list"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            if(err = "Error: Not Found") return resolve({message:"User List", "success":true, data:[]});
            reject(err);       
        })
    })  
}