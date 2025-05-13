//Named Export in common JS
module.exports = {
    a : 1,
    b : 2,
    c : 3,
}

const d = 45;
module.exports = d;

//Default Export
// let obj; //object vaiable shouble initialized before exporting
// export default obj = {
//     x : 5,
//     y : 7
// }