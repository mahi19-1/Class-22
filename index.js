const arr=[{
    name:"Mahi" ,
    address:"Panthapath" ,
    age: 20,
    mahi:function(){
        console.log('thik ache')
    }},
    {
    name:"Oasika" ,
    address:"Green Road" ,
    age: 21,
    oasika:function(){
        console.log('thik ache')
    },

}]
console.log(arr)
//const arrays =[[10,20,30],[40,50,60],[70,80,90]]

//console.log(arrays[1])
//for(const ar of arrays){
    //console.log(ar)
   // for(const a of ar){
    //    console.log(a)
   // }
//}
//for(let i = 0;i<arrays.length;i++){
   // console.log(arrays[i])
  // for(let j = 0;j<arrays[i].length;j++){
    //console.log(i)
   // console.log(arrays[i][j])
   //}
//}



//let a = 10;
//function mahi(){
  //  console.log(a)
//}
//mahi()

                            //  HIGHER ORDER FUNCTION //

function summation (a,b){
    return a+b
}
summation(10,20)

//function multiply(1,m,another){
    //const c =1+m;
  //  const d =1-m;

  //  function multiplication(){
   //     const e = another(c,d)
   //     const result =e*c*d;
  //      return result
  //  }
   // return multiplication;
//}

//const result = multiply(10,20,summation)
//console.log(result())

//Call Back//

//function mahi(a,b){
//return a+b
//}

//let const

let a = 5;

//a=6

const b = 10;

//arrow function
// const summation=(a,b)=>a+b;
//console.log(summation(10,50));
 
//const mahis = function mahi(one){
//    console.log('one')
//}
//mahis(10)


const obj = {
    name:"Oasika" ,
    address:"Green Road" ,
    age: 21,
    oasika:function(){
        console.log('thik ache')
}}
//console.log(obj.name)
//const {name,age, address,mahi} = obj
//console.log(mahi())


    //spread operator//

   // const arrays= [10,20,30,50]
    //const arra = [...arrays]
   // arra.push(50)
   // console.log(arrays)
   // console.log(array)


   //map


   const arrays =[10,20,30,40,50]
   const result = arrays.foreach(ar=>ar*2)
   console.log(result)
   //arrays.find(ar=>console.log(ar/2))
   //const result = arrays.filter(ar=ar>20)
   