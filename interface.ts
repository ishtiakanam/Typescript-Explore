interface Player {
    name: string,
    club:string,
    salary:number,
    wife?:string
}
const messy:Player ={
    name:"Messi",
    club:"France",
    salary:3000000,
    wife:'anyone'
}

const hannan: Player = {
    name:'Hamma',
    club:'anywher',
    salary:4000
}

interface Employ  {
    name:string,
    salary:number,
    age:number,
}

interface Deblover {
    language:string,
    codeEditor : string,
    typesSpeed:string
}