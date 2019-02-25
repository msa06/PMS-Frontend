export interface Workorder {
  due:Date;
  woid:number;
  status:string;
  title: string;
  priority: string;
  assignee?: string[];
  location?:string;
  assets?:string;
  lastupdated:Date;
  createdon:Date;
}