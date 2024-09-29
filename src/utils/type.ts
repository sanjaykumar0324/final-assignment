
export type FAQ_type = {
    question: string;
    answer: string;
}
export type CustomerCare_type = {
    id: number;
    icon: any;
    title: string;
    description: string;
  };

export type HelpDesk_type={
    id: number,
    icon: string,
    title : string,
    desc  : string

}
export type Service_type={
    id: number,
    icon: string,
    title : string,
    desc  : string,
    buttonText:string

}

export type Blog_type={
    id:number,
    image:string,
    author :string,
    date: string,
    title:string,
    desc:string,
    category:string[]
}

export type Blog_category_type={
   id: string,
   categoryName:string
}
