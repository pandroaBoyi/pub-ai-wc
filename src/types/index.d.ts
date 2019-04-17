// export interface VirtualFile{
//   status?: string;
//   name?: string;
//   size?: number;
//   percentage?: number;
//   uid?: string;
//   showProgress?: boolean;
// }

export interface IviewRenderParams {
  row?: any;
  column?: any;
  index?: number;
}
export interface IviewCascader {
  value: string;
  label: string;
  children?: IviewCascader[];
}
export interface IviewTree {
  title: string;
  expand?: boolean;
  selected?: boolean;
  children?: IviewTree[];
}
export interface IviewCheckbox extends WcSeat{
  label: string;
  disabled: boolean;
  checked: boolean;
}
export interface IviewFormCheck {
  required?: boolean;
  message?: string;
  trigger?: string;
}

export interface TableCol {
  title?: string;
  key?: string;
}

export interface User {
  id?: string;
  uname?: string | IviewFormCheck[];
  nickName?: string;
  password?: string | IviewFormCheck[];
  phone?: number | string | IviewFormCheck[];
  numbers?: number | string | IviewFormCheck[];
  sex?: string;
  roleid?: string;
  status?: number | string;
  toiletId?: string;
  cellClassName?: CellClassName;
  rolename?: string;
  createdatetime?: string;
}

export interface CellClassName {
  password?: string;
  phone?: string;
  number?: string;
}

export interface Search {

}

export interface UserSearch extends Search {
  role?: string;
  status?: string;
}

export interface MediaUpload {
  media_name?: string;
  media_content?: string;
  media_type?: number;
  auditor_id?: string;
  toilets_id?: string;
  cyc_interval?: string;
}

export interface WcFix {
  date?: string;
  num?: string | number;
  name?: string;
  managerName?: string;
}

export interface Wc {
  toiletid?: string;
  codeId?: string | IviewFormCheck[];
  name?: string | IviewFormCheck[];
  address?: string | IviewFormCheck[];
  longitude?: number | string | IviewFormCheck[];
  latitude?: number | string | IviewFormCheck[];
  level?: string | string[] | IviewFormCheck[];
  managerName?: string | IviewFormCheck[];
  place?: WcSeat[] | IviewFormCheck[];
}

export interface WcInfo {
  name?: string;
  level?: string;
  pageSize: number;
  pageNum: number;
}

export interface SysUserParams{
  status?: number | string;
  role?: string;
  pageNum?: number;
  pageSize?: number;
}

export interface WcSeat {
  prefix?: string;
  types?: string;
  num?: number;
}

export interface Role{
  
}