console.log("hell")//    this is callinng  we  are not  exporting anything  only on the require(./sum.js)that we iued in the  hj.js file  it will execute the code in hj.js file   


let name="adhil";
console.log(module.exports)
// module.exports={name}  //   commonly  module.export is like a a empty oqbject  we can add properties to it  and export it to other files
//  module.exports.name=name // like this 
// or we can do like 
// module.exports=name  //   nammak enth venelum ingn echeyym 
/////////////////////////////////////////////////////////////////////////////////////////////////


//  module.exports={name} 
// console.log(module.exports,"is mdouole exports")


function sum(a,b) {
    return a+b
}

module.exports={sum}
