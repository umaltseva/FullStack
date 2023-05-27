const houseMixin = {
    wordReplace(oldWord, newWord) {
        this.description = this.description.replace(oldWord, newWord);
    },

    wordInsertAfter(targetWord, newWord) {
        const words = this.description.split(' ');
        const targetIndex = words.findIndex(word => word === targetWord);

        if (targetIndex !== -1) {
            words.splice(targetIndex + 1, 0, newWord);
            this.description = words.join(' ');
        }
    },

    wordDelete(targetWord) {
        this.description = this.description.replace(targetWord, '');
    },

    wordEncrypt() {
        this.description = rot13Encrypt(this.description);
    },

    wordDecrypt() {
        this.description = rot13Decrypt(this.description);
    }
};

function rot13Encrypt(text) {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const baseCharCode = char <= 'Z' ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - baseCharCode + 13) % 26 + baseCharCode);
    });
}

function rot13Decrypt(text) {
    return rot13Encrypt(text);
}
