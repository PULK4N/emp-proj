export class Employee {
  public id: number = 0;
  /**
   *
   */
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public birthDate: Date = new Date('01.01.1999'),
    public securityNumber: number = 0,
    public age: number = 0,
    public position: string = '',
    public email: string = ''
  ) {}
}
