import axios from "axios";

export async function fetchAndFilterData(url: string): Promise<Array<Data>> {
  return [];
}

export class Data {
  id: number;
  name: string;
  email: string;
  constructor(data: any) {
    this.id = 0;
    this.name = "";
    this.email = "";
  }
}
