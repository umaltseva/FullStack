function addWords(obj, wrds) {
    const wordsArr = obj.words.split(' ').filter(word => word !== '');
    const newWordsArr = wrds.split(' ').filter(word => word !== '');
    obj.words = [...new Set([...wordsArr, ...newWordsArr])].join(' ');
}

function removeWords(obj, wrds) {
    const wordsArr = obj.words.split(' ').filter(word => word !== '');
    const removeWordsArr = wrds.split(' ').filter(word => word !== '');
    obj.words = wordsArr.filter(word => !removeWordsArr.includes(word)).join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    let words = obj.words.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);
    let oldWords = oldWrds.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);
    let newWords = newWrds.split(" ").filter(wrd => wrd != "").filter((tempVal, tempIndex, wrdArr) => wrdArr.indexOf(tempVal) == tempIndex);

    let newTemp = 0;
    for (let i = 0; i < oldWords.length; i++) {
        let temp = words.indexOf(oldWords[i]);
        if (temp != -1) {
            words.splice(temp, 1, newWords[newTemp++]);
        }
    }

    obj.words = words.join(' ');
}

