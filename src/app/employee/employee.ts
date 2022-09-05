export class Employee {
  /**
   *
   */
  constructor(
    public id = 0,
    public username: string = '',
    public password: string = '',
    public firstName: string = '',
    public lastName: string = '',
    public birthDate: Date = new Date('01.01.1999'),
    public securityNumber: number = 0,
    public age: number = 0,
    public position: string = '',
    public email: string = ''
  ) {}
}
