export interface User {
  status: string;
  age: number;
  address?: Address;
}

export interface Address {
  house: string;
  street: string;
}

export const testArray_2: User[] = [
  {
    status: 'active',
    age: 15,
    address:{
      house: '1555',
      street: 'test-street'
    }
  },
  {
    status: 'inactive',
    age: 18

  },
  {
    status: 'inactive',
    age: 28
  },
  {
    status: 'inactive',
    age: 38
  },
  {
    status: 'inactive',
    age: 12
  },
  {
    status: 'active',
    age: 102
  },
  {
    status: 'active',
    age: 120
  }
];
