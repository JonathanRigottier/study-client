export class Course {

  id: string;
  name: string;
  durationHours: number;
  isActive: boolean;
  createdDate: Date;

  constructor(id: string, name: string, durationHours: number, isActive: boolean, createdDate: Date) {
    this.id = id;
    this.name = name;
    this.durationHours = durationHours;
    this.isActive = isActive;
    this.createdDate = createdDate;
  }
}
