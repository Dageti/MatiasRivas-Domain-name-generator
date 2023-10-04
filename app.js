let pronoun = ['the', 'our', 'their'];
let adj = ['great', 'big', 'small', 'cute'];
let noun = ['jogger', 'racoon', 'boat', 'sponge'];
let domain = "";


for(let i=0; i<pronoun.length; i++){
    for (let x= 0; x< adj.length; x++){
        for (let y = 0; y<noun.length; y++){
            domain+= pronoun[i] + adj[x] + noun[y]+ ".com\n";
        }
    }

    }
    console.log(domain)

