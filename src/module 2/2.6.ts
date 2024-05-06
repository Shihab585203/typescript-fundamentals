{
    //Constraints

    const addCourseToStudent = <T extends {id: number, name: string, email: string, phone: number}>(student: T) => {
        const courseName = "Next Level Web Development";

        return {
            ...student,
            courseName
        }
    }

    const student1 = addCourseToStudent({
        id: 1,
        name: "Mr. X",
        email: "x@gmail.com",
        phone: 58522114
    });

    const student2 = addCourseToStudent({
        id: 2,
        name: "Mr. Y",
        email: "y@gmail.com",
        phone: +455841985
    })
}