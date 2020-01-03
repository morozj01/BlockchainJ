module.exports = function(options){
        if(!options) throw new Error("Expected object with config parameters");
        if(!options.hash) throw new Error("Please include a valid api hash when instantiating"); 
        if(!options.endpoint) throw new Error("Please include a valid endpoint when instantiating");
        this.hash = options.hash;
        this.baseUrl = "http://"+options.endpoint+"/api";
        this.maxRetries = options.maxRetries?options.maxRetries:10; 
        return this;    
        }; 
