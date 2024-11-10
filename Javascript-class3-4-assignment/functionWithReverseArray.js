function reverseArray(arr){

    var newArray = []; 
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[i]);

    }
    return newArray;
}

const array1 = [1, 2, 3, 4, 5];

document.write(reverseArray(array1));



