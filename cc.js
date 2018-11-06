

let a=Array.from({length:9},(x,y)=>y);
console.log(a);

a.forEach((item,index)=>{
    let c=Math.random()*(a.length-index);
    let d=Math.floor(c)+index;
    [a[index],a[d]]=[a[d],a[index]]
});
console.log(a)
for(let k=a.length-1;k>=0;k--){
    for(let i=0;i<k;i++){
        if(a[i]>a[i+1]){
            [a[i],a[i+1]]=[a[i+1],a[i]]
        }
    }
}
console.log(a);
