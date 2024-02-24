"use strict";
let employee = {
    id: 1,
    name: "Janet",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs("10Kg");
kgToLbs(10);
//# sourceMappingURL=app.js.map