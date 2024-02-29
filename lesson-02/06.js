let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

let copyPassportWithAddress = deepCopy(passportWithAddress);

copyPassportWithAddress.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(copyPassportWithAddress.address.city);