export class School {

  id: string;
  name: string;
  city: string;
  phone: string;
  isActive: boolean;
  createdDate: Date;

  constructor(id: string, name: string, city: string, phone: string, isActive: boolean, createdDate: Date) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.phone = phone;
    this.isActive = isActive;
    this.createdDate = createdDate;
  }

}
