SelectionSort = (array) => {
    for (let wall = 0; wall < array.length - 1; wall++) {
        // Find Smallest Number
        // Separator identifies - wall = ;
        let smallestIndex = wall;
        for (let i = wall + 1; i < array.length; i++) {
            if (array[smallestIndex] > array[i]) {
                smallestIndex = i;
            }
        }
        //SmalletElement element array[smallestIndex]
        // swap array items
        let temp = array[smallestIndex];
        array[smallestIndex]=  array[wall];
        array[wall] = temp;
        console.log(array);
    }
}
SelectionSort([12,3,5,77,43,2,6,2,55,63,61,22]);