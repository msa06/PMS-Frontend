export interface Workorder {
  due?:Date;
  id?:number;
  status?:string;
  title?: string;
  description?:string;
  priority?: string;
  assignee?: string[];
  location?:string;
  asset?:string;
  lastupdated?:Date;
  createdon?:Date;
}