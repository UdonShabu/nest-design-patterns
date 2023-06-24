import { PostPrototype } from './post.prototype';

export class TextPostPrototype extends PostPrototype {
  constructor(
    public title: string,
    public author: string,
    public createdAt: Date,
  ) {
    super(title, author, createdAt);
  }

  clone(): TextPostPrototype {
    return new TextPostPrototype(this.title, this.author, this.createdAt);
  }
}
