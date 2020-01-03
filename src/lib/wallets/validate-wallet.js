const request = require("../request.js");
const requireParams = require("./validate-wallet-params");

module.exports = function(options){
    return new Promise((resolve,reject)=>{
        if(!options) return reject(new Error("Missing required options object"));
        for(let x of Object.keys(requireParams)){
            if(!options[x] && requireParams[x].required == true) return reject(new Error("Missing required field <"+ x+">"));
            if(options[x] && typeof(options[x])!==requireParams[x].type) return reject(new Error("Incorrect type for field <"+ x+"> must be of type "+requireParams[x].type));
        }
        request.call(this,{...options,path:"/ethereum/wallet_validation"}).then(value=>{
            resolve(value);
        }).catch(err=>{
            if(err.error.message == "[There are no data]") {err.message = "Wallet password incorrect"}
            reject(err);
        })
    })  
}