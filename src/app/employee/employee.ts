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
    public age: string = '',
    public position: string = '',
    public email: string = ''
  ) {}
}

export class ValidEmployee {
  /**
   *
   */
  constructor(
    public validUsername: boolean = false,
    public validPassword: boolean = false,
    public validRepeatPassword: boolean = false,
    public validFirstName: boolean = false,
    public validLastName: boolean = false,
    public validBirthDate: boolean = false,
    public validSecurityNumber: boolean = false,
    public validAge: boolean = false,
    public validPosition: boolean = false,
    public validEmail: boolean = false
  ) {}
}
