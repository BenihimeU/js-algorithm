InsertionSort = (array) => {
    // Start Loop array
    let len = array.length, key, separator;
    for (let i = 0; i < len; i++) {
        key = array[i]; // First element of array
        separator = i - 1;
        while ((separator > -1) && (array[separator] > key)) {
            array[separator + 1] = array[separator]
            separator--;
        }
        array[separator + 1] = key;
        console.log(array);
    }
}

InsertionSort([12, 3, 5, 77, 43, 2, 6, 2, 55, 63, 61, 22]);