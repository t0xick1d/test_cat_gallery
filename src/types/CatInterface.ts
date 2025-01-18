export interface CatI {
   id: string;
   url: string;
   width: number;
   height: number;
   name: string;
   mime_type: string;
   breeds: [];
   categories: [];
}
export interface BreedI {
   id: number;
   name: string;
   weight: string;
   height: string;
   life_span: string;
   breed_group: string;
}
