const student={
    name:"Shatakshi",
    age: 20,
    cn: 99,
    cd: 98,
    eng: 95,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.cd + this.cn)/3;
        console.log(`${this.name} got the avg marks = ${avg}`);
    }
}

