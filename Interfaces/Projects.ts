export interface IProps {
  name: string;
  git: string;
  live: string;
  desc: string;
  stack: string;
  videoSrc: string;
}

export interface ProjectProps {
  data: IProps[];
}
