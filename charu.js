/**
 * Created by gan on 2017/12/25.
 */
import arr from './xipai'
 /**
	插入排序
	思想为将后面的数据插入到已经排好的排序中
 */
 console.log(arr);


 let arr1=[];//作为排好的序列
function addArr(cnub) {
	//console.log(cnub);
	if(arr1.length<1 || cnub>arr1[arr1.length-1]){
		arr1.push(cnub);
	}else{
	//	arr1.push(cnub);
	//	console.log(arr1)
	//	console.log(arr1[arr1.length-1])
		for(let i=0;i<arr1.length;i++){
			if(cnub<arr1[i]){
				arr1.splice(i,0,cnub);
				return;
			}
		}
	}	
};

for(let c=0;c<arr.length;c++){
	addArr(arr[c]);
}
console.log(arr1);






