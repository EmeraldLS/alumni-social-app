export interface Comment {
  userImg: ImageMetadata;
  name: string;
  time: string; // TODO: Will change this to Date later
  content: string;
}

export interface Post {
  userImg: ImageMetadata;
  name: String;
  time: String; // TODO: Will change it to Date later
  content: String;
  likes: number;
  noOfComments: number;
  img: String;
}
