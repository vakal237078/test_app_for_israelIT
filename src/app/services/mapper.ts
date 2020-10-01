import {IUser} from '../interfaces/user.interface';

export class Mapper {
  public static mapUserToIUser(user: any): IUser {
    return {
      id: user.id,
      name: user.name,
      description: user.description,
      createdAt: user.createdAt,
      editedAt: user.editedAt
    } as IUser;
  }

  public static mapUsersToIUsers(users: any): IUser[] {
    return users.map((user: any) => this.mapUserToIUser(user));

  }
}
