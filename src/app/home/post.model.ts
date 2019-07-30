

export class Post{
    public id:String;
    public title:string;
    public description:string;
    public file:string;

    constructor(id:string,title: string,description: string, file: string){
        this.id=id;
        this.title=title;
        this.description=description;
        this.file=file;
       
    }
}