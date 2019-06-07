
export class User {
    public firstname: string;
    public lastname: string;

    private age: number;

    constructor() {
        this.firstname = "Simon";
        this.lastname = "Misrahi";
    }

    public setFirstname(firstname: string) {
        this.firstname = firstname;
    }

    public setDateOfBirth(dob: Date) {
        this.age = 20;
    }

    public getAge() {
        return this.age;
    }

    public setFullname(name: string) {

    }
}
