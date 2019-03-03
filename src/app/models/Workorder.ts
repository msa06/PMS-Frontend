export interface Workorder {
  id?:number;
  assignee?: string[];
  description?:string;
  location?:string;
  machineid?:number;
  machinename?:string;
  priority?: string;
  status?:string;
  title?: string;
  
  due?:Date;
  lastupdated?:Date;
  createdon?:Date;
}