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
export interface IviewCheckbox {
  label: string;
  disabled: boolean;
  key: string;
  checked: boolean;
}

export interface TableCol {
  title?: string;
  key?: string;
}

export interface User {
  uname?: string;
  nickName?: string;
  password?: string;
  phone?: number | string;
  number?: number | string;
  sex?: string;
  roleid?: string;
  status?: number | string;
  CreateUserId?: string;
  cellClassName?: CellClassName;
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
  codeId?: string;
  name?: string;
  address?: string;
  longitude?: number | string;
  latitude?: number | string;
  level?: string | string[];
  managerName?: string;
  place?: WcSeat[];
}

export interface WcSeat {
  prefix?: string;
  types?: string;
  num?: number;
}