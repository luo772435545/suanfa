/**
 * Created by gan on 2017/12/25.
 */
import arr from './xipai'
console.log(arr);
/*
* 快速排序
* 先一分二，然后把中间的那个数拿出来，大的放一边小的放一边，
* 数组继续把中间的数拿出来，大的放一边小的放一边。如果数组长度小于等于1就直接返回
* */
function kuaisu(arr) {
    if(arr.length<=1){
        return arr;
    }
    let middle=arr.splice(Math.floor(arr.length/2),1)[0];
    let left=[];
    let right=[] ;
    for(let i=0;i<arr.length;i++){
            if(arr[i]<=middle){
                left.push(arr[i])
            }else {
                right.push(arr[i])
            }
    };
    return kuaisu(left).concat(middle,kuaisu(right))
}
console.log(kuaisu(kuaisu(arr)))
