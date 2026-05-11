import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  private idCounter = 1;

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    const post = this.posts.find(p => p.id === id);
    if (!post) throw new NotFoundException(`Post with ID ${id} not found`);
    return post;
  }

  create(dto: CreatePostDto) {
    const newPost = { id: this.idCounter++, ...dto };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, dto: CreatePostDto) {
    const index = this.posts.findIndex(p => p.id === id);
    if (index === -1) throw new NotFoundException();
    this.posts[index] = { ...this.posts[index], ...dto };
    return this.posts[index];
  }

  delete(id: number) {
    this.findOne(id); // Check existence
    this.posts = this.posts.filter(p => p.id !== id);
    return { deleted: true };
  }
}