// LSP 테스트용 TypeScript 파일

interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}

function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

const service = new UserService();

const newUser: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

service.addUser(newUser);
const message = greet(newUser);
console.log(message);
