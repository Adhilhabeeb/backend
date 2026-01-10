
let crypto=require("node:crypto")


// console.log(crypto.randomBytes(16).toString('hex'),"and")
// const hash = crypto.scryptSync("adhilhabeeb@1", 'salt', 640).toString('hex');

const key = crypto.pbkdf2('adhil@1', 'salt', 50000, 50, 'sha512',(err,key)=>{
console.log("keyi sgetted",key)

           });

           console.log(key,"is teuurnr ky")