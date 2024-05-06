{
    // Class and Object

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        //Parameter Properties

        constructor(public name: string, public  species: string, public  sound: string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound(){
            console.log(`This ${this.name} which isss ${this.species} whether is doing ${this.sound}`);
        }
    }

    const dog = new  Animal("khan shaheb", "dog", "ghew ghew" )
    const cat = new  Animal("khondokar fahim", "dog", "meaw meaw" )
    cat.makeSound()
        
   
}