export interface Blog {
  id: number;
  title: string;
  author: string;
  summary: string;
  body: string;
  dateCreated: Date;
  dateUpdated?: Date;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  comment: string;
  dateCreated: Date;
  dateUpdated?: Date;
}
