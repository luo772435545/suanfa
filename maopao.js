/**
 * Created by gan on 2017/12/25.
 */
import arr from './xipai'
console.log(arr);
/**
 * 冒泡排序
 * 比较相邻的两个数字，数字小的向前移动。
 * */
var method=function (ind) {
    for(let i=ind;i<arr.length;i++){
        if(arr[ind]>arr[i]){
            [arr[ind],arr[i]]=[arr[i],arr[ind]];
        }
    }
};
for(let i=0;i<arr.length;i++){
    method(i);
}
console.log(arr);