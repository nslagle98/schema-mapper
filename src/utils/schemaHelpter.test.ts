import { dynamicObjectAdd } from "./schemaHelper";


const path = 'school'
const path2 = 'school.engineering.circuits'
const path3 = 'level1.level2.level3'


test( 'Dynamic add 1 level deep' , () => {
    expect( dynamicObjectAdd(inputObj, path, {key: "gpa", value: 3.6 })).toStrictEqual(outputObj)
})
test( "Add field with path that doesn't fully exist", () => {
    expect( dynamicObjectAdd(inputObj, path2, { key: "grade", value: "A+"} ) ).toStrictEqual(outputObj2)
})
test( "Add super nestd item", () => {
    expect( dynamicObjectAdd(inputObj, path3, {key: "newitem1", value: "testVal" })).toStrictEqual(outputObj3)
})

const inputObj = { 
    name: { 
        first: "John",
        last: "Smith", 
    },
    school : {
        name: "SIU",
        location: "Carbondale",
    },
    level1 : {
        level2 : {
            level3 : {
                thing1: "idk"
            }
        }
    }
} as const

const outputObj = {
    name: {
        first: "John",
        last: "Smith",
    },
    school : {
        name: "SIU",
        location: "Carbondale",
        gpa: 3.6
    },
    level1 : {
        level2 : {
            level3 : {
                thing1: "idk"
            }
        }
    }
}
//const path2 = 'school.engineering.circuits'
const outputObj2 = {
    name: {
        first: "John",
        last: "Smith",
    },
    school : {
        name: "SIU",
        location: "Carbondale",
        engineering : {
            circuits: {
                grade: "A+"
            }
        }
    },
    level1 : {
        level2 : {
            level3 : {
                thing1: "idk"
            }
        }
    }
}

const outputObj3 = {
    name: {
        first: "John",
        last: "Smith",
    },
    school : {
        name: "SIU",
        location: "Carbondale",
    },
    level1 : {
        level2 : {
            level3 : {
                thing1: "idk",
                newitem1: "testVal"
            }
        }
    }
}
