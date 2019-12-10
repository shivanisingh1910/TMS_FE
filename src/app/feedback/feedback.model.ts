export class FeedbackResolver
{
    constructor(
        public empId?:string,
        public tid?:string,
        public close?:boolean,
        public rating?:number,
        public feedback?:string,
        ){}


}