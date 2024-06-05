// export interface IProduct{
//     id:number;
//     name:string;
//     turno: any;
// }

export interface IProduct {
    id: string;
    name: string;
    price: number;
  }
  
  export interface ICreateProductPayload {
    name: string;
    price: number;
  }
