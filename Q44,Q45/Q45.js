"use strict";
function who_create_Car(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const MyCar = who_create_Car("toyota", "corolla", ["color", "red"], ["optaional", "Good speed"], ["petrol maylej", "1 to 12km"]);
console.log(MyCar);
