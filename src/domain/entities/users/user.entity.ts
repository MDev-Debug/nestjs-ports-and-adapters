export class UserEntity {
  public readonly id: number;
  
  constructor(
    public name: string,
    public email: string,
  ) {}
}
