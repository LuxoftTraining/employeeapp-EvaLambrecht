export class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
    get fullName() {
        return this.name + " " + this.surname;
    }
    
    get age() {
        if (!this._dateOfBirth) {
            return "";
        }   
        let ageAsDateFromEpoch = new Date(Date.now() - this._dateOfBirth.getTime());
        let age = Math.abs(ageAsDateFromEpoch.getUTCFullYear() - 1970);
        return " <b>Age:</b> " + age;
    }

    get dateOfBirth() {
        return this._dateOfBirth ? " <b>Date of birth:</b> " + this.formatDate(this._dateOfBirth) : "";
    }

    get phones() {
        if (!this._phones) {
            return "";
        }
        var retStr = "";
        for (let phoneNo of this._phones) {
            retStr += phoneNo + " ";
        }
        return retStr;
    }

    set dateOfBirth(date) {
        this._dateOfBirth = new Date(date);
    }
       
    set phone(phoneNo) {
        if (!this._phones) {
            this["_phones"] = [phoneNo];
        } else {
            this._phones.push(phoneNo);
        }
    }


    formatDate(date) {
        let day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
        let month = date.getMonth()+1 < 10? "0"+(date.getMonth()+1) : date.getMonth()+1;
        let year = date.getFullYear();
        return day + "." + month + "." + year;
    }

    toString() {
        const phones = this.phones ? `List of phones: ${this.phones}` : "";
        return `${this.fullName} \
        ${this.dateOfBirth} ${this.age} ${phones}`;
    }
    
    static fromJSON(obj) {
        return Object.assign(new Person(), obj);
    }
    
   
}

window.Person = Person;