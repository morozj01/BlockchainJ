//Applies to create-user and update-user
module.exports = {
    email:{type:"string",required:true},
    password:{type:"string",required:true},
    city:{type:"string",required:false},
    country:{type:"string",required:false},
    ssn:{type:"string",required:false},
    first_name:{type:"string",required:false},
    last_name:{type:"string",required:false},
    address:{type:"string",required:false},
    state:{type:"string",required:false},
    zip:{type:"string",required:false},
    phone:{type:"string",required:false},
    regulator:{type:"string",required:false},
    nature_of_business:{type:"string",required:false},
    firm_name:{type:"string",required:false},
    trader_id:{type:"number",required:false},
    role_id:{type:"number",required:false}
}