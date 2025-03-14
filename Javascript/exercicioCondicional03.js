"use strict";
const ano = 3000;
if (ano <= 4000 || ano <= 476) {
    console.log(`ANTIGA`);
}
else if (ano > 476 || ano <= 1453) {
    console.log(`MEDIA`);
}
else if (ano > 1453 || ano <= 1789) {
    console.log(`MODERNA`);
}
else if (ano > 1789) {
    console.log(`CONTEMPORANEA`);
}
