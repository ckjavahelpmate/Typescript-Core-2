// Create Array using literals
let array1 : number[] = [1, 2, 3] ;
console.log( "Array1 ", array1 )
console.log( "---------------------------------------------------------" )

// Create Array using constructor with literals
let array2 = new Array( 4, 5, 6)
console.log( "Array2 ", array2 )
console.log( "---------------------------------------------------------" )

// Create Array using constructor with size and undefined values
let array3 = new Array( 3)
console.log( "Array3 ", array3 )
console.log( "index 0 ", array3[0] )
console.log( "index 1 ", array3[1] )
console.log( "index 2 ", array3[2] )
console.log( "---------------------------------------------------------" )

// Creating arrsy using Arrsy.of()
let array4 = Array.of( 10, 20, 30)
console.log( "Array4 ", array4 )
console.log( "---------------------------------------------------------" )

// Creating arrsy using Arrsy.from()
let array5 = Array.from( "12345")
console.log( "Array5 ", array5 )
console.log( "---------------------------------------------------------" )

// Create Array using spread operator
let array6 = [...array1]
console.log( "Array6 ", array6 )
console.log( "---------------------------------------------------------" )

export{}