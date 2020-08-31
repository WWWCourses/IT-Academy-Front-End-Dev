var cats = [];

for (let i = 0; i < 3; i++) {
    cats[i] = function(){
        console.log(`Cat ${i} is ready!`);
    }
}

cats[0](); //Cat 3 is ready!
cats[1](); //Cat 3 is ready!
cats[2](); //Cat 3 is ready!