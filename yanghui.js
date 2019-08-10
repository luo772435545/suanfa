let arr = [[1]];
function valueFn(n, m) {
    let a = arr[n-1][m-1] ? arr[n-1][m-1] : 0;
    let b = arr[n-1][m] ? arr[n-1][m] : 0;
    return a+b
}
function start(number) {
    for(let i = 1 ;i<=number;i++) {
        arr[i] = [];
        for(let j=0;j<=i;j++) {
            arr[i][j]=valueFn(i,j)
        }
    }
}
start(10);