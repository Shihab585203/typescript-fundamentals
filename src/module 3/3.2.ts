{
    //Inheritance OOP

    class Parent {
        name: string;
        age: number;
        address: string;
        
        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
            
        }

        getSleep(numOfHours: number){
            console.log(`His name is ${this.name} will sleep for ${numOfHours} `);
        }
    }

    class Student extends Parent {
        

        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }
    }

    const student = new Student("Jamal", 19, "Kurchap") 


    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address)
            this.designation = designation;
        }
        
        takeClass(durationOfClass: number){
            console.log(`This ${this.designation} will take class for ${durationOfClass}`);
        }
    }

    const teacher = new Teacher("Kawser", 39, "Gulshan", "teacher")
}