{
    // Generic Types

    type GenericType<T> = Array<T>

    // const rollNumber: number[] = [1, 2, 3];
    const rollNumber: GenericType<number> = [1, 2, 3];

    // const mentors: string[] = ["a", "b", "c"]
    const mentors: GenericType<string> = ["a", "b", "c"]

    // const booleanArray: boolean[] = [true, false, true]
    const booleanArray: GenericType<boolean> = [true, false, true]

    const user: GenericType<{ name: string, age: number }> = [
        {
            name: "Shihab",
            age: 22
        },
        {
            name: "Hridoy",
            age: 20
        }
    ]

    // Generic Tuple

    type GenericTuple<X, Y> = [X, Y]

    const person: GenericTuple<number, {name: string, roll: number}> = [123, {name: "Sehab", roll: 1234}]
}