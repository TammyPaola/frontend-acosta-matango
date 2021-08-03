import {bookmodel} from './book.model';
export interface authormodel{


    id?:number;
    book:bookmodel;
    age ?:number;
    name?:string;
    email?: string;
    date?:Date;
    desidentificador?: string;
    number?:number;

}
