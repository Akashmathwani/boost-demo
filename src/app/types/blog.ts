export type BlogPost = {
  title: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  sections?: {
    title: string;
    image: string;
  }[];
};

export type BlogContent = {
  [key: string]: BlogPost;
};
