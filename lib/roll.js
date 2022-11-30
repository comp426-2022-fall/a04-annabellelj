export function roll(sides, dice, rolls){
    var num = [];
    for (let i = 0; i < rolls; i++){
        let variable = 0;
        for (let j = 0; j < rolls; j++){
            variable = variable + Math.floor(Math.random() * sides) + 1;
        }
        num.push(variable);
    }
var result = {
    sides: sides,
    dice: dice,
    rolls: rolls,
    results: num
};
return result;
}
