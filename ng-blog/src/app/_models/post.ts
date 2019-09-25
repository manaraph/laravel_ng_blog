export interface IEvent {
  id: number;
  name: string;
  // date: Date;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  location?: string;
  onlineUrl?: string;
  // sessions: ISession[];
}

// export interface ISession {
//   id: number;
//   name: string;
//   presenter: string;
//   duration: number;
//   level: string;
//   abstract: string;
//   voters: string[];
// }
