var vhod = 5;
function proverka (vhod){
    if (typeof vhod === 'number'){
        return new Date().toLocaleString();
    }else{ return 'Ne vernyi tip dannyh'}
};
var exit = proverka(vhod);
console.log(exit);