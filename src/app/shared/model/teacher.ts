import {School} from "./school";
import {Course} from "./course";

export class Teacher {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  school: School;
  courses: [Course];
  isActive: boolean;
  createdDate: Date;

  constructor(id: string, firstName: string, lastName: string, address: string, email: string,
              phone: string, school: School, courses: [Course], isActive: boolean,
              createdDate: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.school = school;
    this.courses = courses;
    this.isActive = isActive;
    this.createdDate = createdDate;
  }


}
