let A = "saurav";
let B = "sbcrav";

function MinCost(n,s1,s2){
    let cost = 0;

        for(let i =1; i<=n;i++){
            if(s1[i] !=s2[i]){
                cost = cost + (i+1) * s1.charCodeAt(i)
            }
            }
        return cost;

}
let C = MinCost(6,A,B)
console.log(C)