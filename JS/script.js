
function christmassTree(christmassTreeRow) {
    for(var i = 0; i < christmassTreeRow; i++) {
        var star = 'k'; 
        //for(var j = 0 ; j < christmassTreeRow - i; j++) {
           // star += ' '; 
        //}
        for(var j = 0; j <= i * 2; j++) {
           star += '*'; 
        }
    console.log(star);
    }
}
christmassTree(4);
