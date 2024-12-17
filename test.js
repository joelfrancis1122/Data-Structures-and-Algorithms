var a = 10;
{
  var a = 33;
}
console.log(a);
var a = 10;
function hi() {
  var a = 33;
}
hi();
console.log(a);



// let a = 10

// let obj={
//   a: 1,
//   b: function (){
//       console.log(this)
//   },
//   c: () => {
//       console.log(this)
//   },
//   d: function (){
//       const hi = () => {
//       console.log(this)
//       }
//       hi()
//   }
// }

// obj.b()
// obj.c()
// obj.d()
