{
    // conditional types
    
    type A1 = null;
    type B2 = undefined;

    type x = A1 extends number ? true : false; 
    type y = A1 extends null ? true : B2 extends undefined ? undefined : any;

    type Sheikh = {
        car: string;
        plane: string;
        bike: string;
        train: string
    }

    // type CheckVehicle<T> = T extends "car" | "bike" | "train" ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type hasBike = CheckVehicle<"bike">

}