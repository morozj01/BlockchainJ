const request = require("../request.js");
const requireParams = require("./balances-by-wallet-params");

module.exports = function(options){
    return new Promise((resolve,reject)=>{
        if(!options) return reject(new Error("Missing required options object"));
        if(!options.allow_zero) options.allow_zero = true;
        for(let x of Object.keys(requireParams)){
            if(!options[x] && requireParams[x].required == true) return reject(new Error("Missing required field <"+ x+">"));
            if(requireParams[x].type == "array"){ 
                if(!Array.isArray(options[x])){
                    return reject(new Error("Incorrect type for field <"+ x+"> must be of type "+requireParams[x].type)); 
                } continue; 
            }
            if(options[x] && typeof(options[x])!==requireParams[x].type) return reject(new Error("Incorrect type for field <"+ x+"> must be of type "+requireParams[x].type));
        }
        request.call(this,{...options,path:"/ethereum/balances_by_wallet"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            reject(err);
        })
    })  
}
