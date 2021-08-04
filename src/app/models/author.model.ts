import {BookModel} from './book.model';
export interface AuthorModel{
    id?:number;
    book?:BookModel;
    email?: string;
    age ?:number;
    identification?: string;
    names?:string;
    phone?:string;

}
