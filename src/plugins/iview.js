import Vue from 'vue'
import { 
  Button, 
  Input, 
  Layout, 
  Sider, 
  Header, 
  Content, 
  Menu, 
  Submenu, 
  MenuItem, 
  Icon, 
  Checkbox, 
  CheckboxGroup, 
  Form, 
  FormItem, 
  Row, 
  Col,
  Message, 
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Option,
  Table,
  Modal,
  Page,
  Upload,
  Notice,
  Progress,
  Spin,
  Radio,
  RadioGroup,
  Tabs,
  TabPane,
  Cascader,
  Tag,
  DatePicker,
  Tree,
  Collapse,
  Panel,
} from 'iview'

const components = {
  Button, 
  Input, 
  Layout, 
  Sider, 
  Header, 
  Content, 
  Menu, 
  Submenu, 
  MenuItem, 
  Icon, 
  Checkbox, 
  CheckboxGroup, 
  Form, 
  FormItem, 
  Row, 
  Col,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  Select,
  Option,
  Table,
  Page,
  Upload,
  Message,
  Modal,
  Notice,
  Progress,
  Spin,
  Radio,
  RadioGroup,
  Tabs,
  TabPane,
  Cascader,
  Tag,
  DatePicker,
  Tree,
  Collapse,
  Panel
}

const iview = {
  ...components
}

Object.keys(iview).forEach((key) => {
  Vue.component(key, iview[key]);
});

Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;

import 'iview/dist/styles/iview.css'
