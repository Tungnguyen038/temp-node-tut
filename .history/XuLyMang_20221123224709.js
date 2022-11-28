
// Cho mảng số:
// {889, 100, 546, 1001, 2022, 5, 79, 68, 99999, 4687}
// in ra những số có “số đầu tiên là số lẻ”
const a= [889, 100, 546, 1001, 2022, 5, 79, 68, 99999, 4687]
let bientam = []
function ab(y){
  let count=0
      let x=y
            while(Math.floor(x /10) >0){
        count+=1
        x= Math.floor(x/10) 
      }
      return count
}
for (let i=0;i<a.length;i++) {
    let lenNumber= ab(a[i])
    if ((Math.floor(a[i]/(Math.pow(10,lenNumber))))%2!==0){
      bientam.push(a[i])
    }
    
}
console.log(bientam)