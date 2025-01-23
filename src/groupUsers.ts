/**
 * Write a function to group two types of users into EMPLOYEE and CONTRACTOR groups
 *
 * A function should return an object consists of two arrays of grouped users:
 * {
 *   employees: [...]
 *   contractors: [...]
 * }
 * @param {Array<unknown>} users
 * @returns {Object<employees: Array<any>, contractors: Array<any>>}
 */
type EmployeeAddress = {
  officeId: number;
  placeId: number;
};

type Employee = {
  name: string;
  login: string;
  surname: string;
  type: 'EMPLOYEE';
  address: EmployeeAddress;
};

type Contractor = {
  name: string;
  login: string;
  surname: string;
  type: 'CONTRACTOR';
  contractorCompanyName: string;
};

type User = Employee | Contractor;

// eslint-disable-next-line func-names
module.exports.groupUsers = function (users: User[]): Record<'employees' | 'contractors', User[]> {
  const employees: Employee[] = [];
  const contractors: Contractor[] = [];

  users.forEach((user: User) => {
    if (user.type === 'CONTRACTOR') {
      contractors.push(user);
    }
    if (user.type === 'EMPLOYEE') {
      employees.push(user);
    }
  });
  return { employees, contractors };
};
