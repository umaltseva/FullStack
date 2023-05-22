function sortEvenOdd(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (arr[left] % 2 === 0 && left < right) {
            left++;
        }
        while (arr[right] % 2 !== 0 && left < right) {
            right--;
        }

        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
}