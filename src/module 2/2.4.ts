{
    //Generic with interface

    interface Developer<T, X = null> {
        name: string,
        computer: {
            brand: string,
            model: string
        },
        handWatch: T,
        bike? : X
    }

    interface LenovoWatch {
            brand: string,
            model: string
        }
    

    const poorDeveloper: Developer<LenovoWatch> = {
        name: "Shihab",
        computer: {
            brand: "Lenovo",
            model: "T04s"
        },
        handWatch: {
            brand: "normalizer",
            model: "P4"
        }
    }

    interface rolexWatch {
        brand: string,
        model: string,
        sensor: boolean
    }

    interface KawasakiBike {
        brand: string,
        model: string
    }

    const richDeveloper: Developer<rolexWatch, KawasakiBike> = {
        name: "rich Dev",
        computer: {
            brand: "Apple",
            model: "macbook"
        },
        handWatch: {
            brand: "rolex",
            model: "Y4",
            sensor: true
        },
        bike: {
            brand: "Kawasaki",
            model: "DX"
        }
    }
}