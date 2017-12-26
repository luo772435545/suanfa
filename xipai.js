/**
 * Created by gan on 2017/12/25.
 */

//洗牌算法
//洗牌算法是将原有的序列打乱
const a=Array.from({length:9},(s,x)=>x);
for (let i=0;i<a.length-2;i++){
    let random=Math.random()*(a.length-i);
    let j=i+Math.floor(random);
    [a[i],a[j]]=[a[j],a[i]]
}

export default a