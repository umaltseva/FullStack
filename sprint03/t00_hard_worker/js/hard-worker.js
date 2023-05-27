class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this._age = age;
        this._salary = salary;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (age >= 1 && age < 100) {
            this._age = age;
        }
        else {
            return;
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary >= 100 && salary < 10000) {
            this._salary = salary;
        }
        else {
            return;
        }
    }

    toObject() {
        return {
            name: this.name,
            age: this.age,
            salary: this.salary
        };
    }
}