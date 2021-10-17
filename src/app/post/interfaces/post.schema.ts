export interface Post {
  title: string;
  content: string;
  thumbnail: string;
  createdAt: Date;
  comments: Comment[];
  user?: any;
}

// TODO: it will be used after model ready
interface Comment {
  user: any;
  createdAt: Date;
}

// TODO: will be used after model ready
interface User {}
