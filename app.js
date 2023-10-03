let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = "";

function randomname(arr) {
    const randomindex = Math.floor(Math.random()*arr.length)
    return arr[randomindex];
} 

let quantity = 20;

for(let i=0; i<quantity; i++){
    for (let x= 0; x< 3; x++){
        if(x=0){
        domain += randomname(pronoun);
    } else if (x = 1){
        domain += randomname(adj);
    } else if (x = 2){
        domain += randomname(noun);
    } else {
        domain+=".com"
    }

    }
    console.log(domain)
}
