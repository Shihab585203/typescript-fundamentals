{
    //Function with Generic

    const createArray = ( params: string ): string[] => {
        return [params]
    } 

    const createArrayWithGeneric = <T>( params: T ): T[] => {
        return [params]
    } 

    const data1 = createArray("Bangladesh");
    const data2 = createArrayWithGeneric<string>("Uganda");

    interface User {id: number, name: string}
    
    const obj = createArrayWithGeneric<User>({id: 255, name: "Sehab"})

    //Function Tuple with Generic

    const createArrayWithTuple = <X, Y>( param1: X, param2: Y ): [X, Y] => {
        return [param1, param2]
    } 

    const data3 = createArrayWithTuple<string, number>("Bangladesh", 123);

    const data4 = createArrayWithTuple<number, {name: string, phone: number}>(123, {name: "Sujon", phone: 1255411})

    

    const addCourseToStudent = <T>(student: T) => {
        const courseName = "Next Level Web Development";

        return {
            ...student,
            courseName
        }
    }

    const student1 = addCourseToStudent({
        name: "Mr. X",
        email: "x@gmail.com"
    });

    const student2 = addCourseToStudent({
        name: "Mr. Y",
        email: "y@gmail.com",
        phone: +455841
    })

}