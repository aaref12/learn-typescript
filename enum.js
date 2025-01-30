var field;
(function (field) {
    field[field["science3"] = 0] = "science3";
    field[field["math"] = 1] = "math";
    field[field["biology"] = 2] = "biology";
})(field || (field = {}));
console.log(field);
console.log(field[2]);
