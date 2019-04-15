import Vue, { VueConstructor } from 'vue';
import { AxiosInstance } from 'axios';
import { XLSX$Utils } from 'xlsx';
import { Upload } from 'iview';

declare global {
  interface Window {
    axios: AxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
    $xlsx: {
      read: Function;
      utils: XLSX$Utils;
    };
    $URL_CONST: any;
    $NAV_CONST: any;
  }
  interface VueConstructor {
    $axios: AxiosInstance
    $xlsx:  {
      read: Function;
      utils: XLSX$Utils;
    };
    $URL_CONST: any;
    $NAV_CONST: any;
  }
}
