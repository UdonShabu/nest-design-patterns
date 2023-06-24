export abstract class PostPrototype {
  constructor(
    public title: string,
    public author: string,
    public createdAt: Date,
  ) {}

  abstract clone(): PostPrototype;
}
