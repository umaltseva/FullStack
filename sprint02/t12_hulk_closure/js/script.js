function concat(string1, string2) {
    if (string2 !== undefined) {
        return string1 + " " + string2;
    } else {
        let innerFunc = function () {
            string2 = prompt();
            if (innerFunc.count == undefined) {
                innerFunc.count = 1;
            }
            else {
                innerFunc.count++;
            }
            return string1 + " " + string2;
        }
        return innerFunc;
    }
}