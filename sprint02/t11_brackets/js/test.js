describe('checkBrackets', () => {

    describe('Incorrect', () => {

        it('should return -1 for NaN input', () => {
            assert.equal(checkBrackets(NaN), -1);
        });

        it('should return -1 for non-string input', () => {
            assert.equal(checkBrackets(123), -1);
        });

        it('should return -1 for null input', () => {
            assert.equal(checkBrackets(null), -1);
        });

        it('should return -1 for a string without brackets', () => {
            assert.equal(checkBrackets('abc'), -1);
        });

        it('should return -1 for a string without \'()\' brackets', () => {
            assert.equal(checkBrackets('[]'), -1);
        });

        it('should return -1 for a undefined input', () => {
            assert.equal(checkBrackets(), -1);
        });

    });

    describe('Correct', () => {

        it('1)()(())2(()', () => {
            assert.equal(checkBrackets('1)()(())2(()'), 2);
        });

        it('(()())', () => {
            assert.equal(checkBrackets('(()())'), 0);
        });

        it('(hello)', () => {
            assert.equal(checkBrackets('(hello)'), 0);
        });

        it('((((()))))', () => {
            assert.equal(checkBrackets('((((()))))'), 0);
        });

        it(')(', () => {
            assert.equal(checkBrackets(')('), 2);
        });

        it("()))((", function () {
            assert.equal(checkBrackets('()))(('), 4);
        });

        it('(a)(b)(c', () => {
            assert.equal(checkBrackets('(a)(b)(c'), 1);
        });

        it('1(2(3( ))((4)}', () => {
            assert.equal(checkBrackets('1(2(3( ))((4)}'), 2);
        });

        it('()((((', () => {
            assert.equal(checkBrackets('()(((('), 4);
        });

        it('))17()(', () => {
            assert.equal(checkBrackets('))17()('), 3);
        });

        it('((Hi)()())', () => {
            assert.equal(checkBrackets('((Hi)()())'), 0);
        });
    });

});