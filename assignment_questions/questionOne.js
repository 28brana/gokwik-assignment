const contains = (object, value) => {
    for (let key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
            if (contains(object[key], value)) {
                return true;
            }
        }

        if (object[key] === value) {
            return true;
        }
    }
    return false
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, "foo");
console.log(hasIt);
console.log(doesntHaveIt);