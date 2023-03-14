abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// ----------------------------

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// ----------------------------

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

// ----------------------------

// const accounting = new AccountingDepartment('d1', []);
const accounting = AccountingDepartment.getInstance(); // using the singleton pattern

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Jake');

accounting.printReports();
accounting.printEmployeeInformation();

accounting.describe();

// ----------------------------

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

// ----------------------------

const it = new ITDepartment('d2', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation();

console.log(it);
console.log(accounting);
