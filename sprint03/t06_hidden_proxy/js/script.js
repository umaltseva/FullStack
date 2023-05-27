const validator = {
    get(target, property) {
        console.log(`Trying to access the property '${property}'...`);
        if (!(property in target)) {
            return false;
        }
        return target[property];
    },

    set(target, property, value) {
        
        if (property === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value < 0 || value > 200) {
                throw new RangeError('The age is invalid');
            }
        }
        console.log(`Setting value '${value}' to '${property}'`);
        target[property] = value;
        return true;
    },
};