let send = require("./burn-tokens");
let confirm = require("./transaction-info");

module.exports = function(options){
    send = send.bind(this);
    confirm = confirm.bind(this);
    const library = this; 
    return new Promise((resolve,reject)=>{
        send(options).then(function check(value){
            confirm({transaction_hash:value.data[0].transaction_hash}).then(value=>{
                if(value.data[0].status == "Declined"){
                    reject(value);
                }else{
                    resolve(value);
                }
            }).catch(err =>{
                if(err.error.message == "[There are no data]"){
                    const timeout = Math.ceil(Math.random() * (300 - 1) + 1);
                        setTimeout(function(){
                            check.call(library,value)
                        },timeout);
                }
                else reject(err);
            })
        }).catch(err=>{
            reject(err);
        })
    })  
}