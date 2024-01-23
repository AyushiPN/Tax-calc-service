// User.ts
export class User {
  ctc: number;
  basicSalary: number;
  investment?: string[];
  houseRent?: number;
  actualHraReceived?: number;

  constructor(
    ctc: number,
    basicSalary: number,
    houseRent?: number,
    actualHraReceived?: number,
  ) {
    this.ctc = ctc;
    this.basicSalary = basicSalary;
    this.houseRent = houseRent;
    this.actualHraReceived = actualHraReceived;
  }
}
