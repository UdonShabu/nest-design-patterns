import { Injectable } from '@nestjs/common';
import { TextPostPrototype } from './prototypes/text-post.prototype';

@Injectable()
export class PostService {
  private readonly postPrototype: TextPostPrototype;
  constructor() {
    this.postPrototype = new TextPostPrototype(
      'fal title',
      'fal auth',
      new Date(),
    );
  }

  createNewPost(
    title: string,
    author: string,
    createdAt: Date,
  ): TextPostPrototype {
    const newPost = this.postPrototype.clone();
    newPost.title = title;
    newPost.author = author;
    newPost.createdAt = createdAt;

    return newPost;
  }
}
