const request = require("../request.js");
const requireParams = require("./mint-tokens-params");

module.exports = function(options){
    return new Promise((resolve,reject)=>{
        if(!options) return reject(new Error("Missing required options object"));
        for(let x of Object.keys(requireParams)){
            if(!options[x] && requireParams[x].required == true && !options[x]===0) return reject(new Error("Missing required field <"+ x+">"));
            if(options[x] && typeof(options[x])!==requireParams[x].type) return reject(new Error("Incorrect type for field <"+ x+"> must be of type "+requireParams[x].type));
        }
        request.call(this,{...options,path:"/ethereum/burn"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            reject(err);
        })
    })  
}