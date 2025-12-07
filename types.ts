export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFuture: boolean;
}

export interface Memory {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
}

export interface Reason {
  id: number;
  text: string;
  icon: string;
}