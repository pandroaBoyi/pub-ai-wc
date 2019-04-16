const HOME = '/home';
const OVERVIEW = HOME + '智厕概览';

const ANALYZ = HOME + '数据分析';
const ANALYZ_WC = HOME + '公厕信息分析';
const ANALYZ_HUMAN_TRAFFIC = HOME + '人流量分析';
const ANALYZ_ENV = HOME + '环境分析';

const SYS = HOME + '系统设置';
const SYS_LOG = HOME + '日志管理';
const SYS_USER = HOME + '/userManage/users/list';
const SYS_USER_UPLOAD = HOME + '/userManage/users/list/upload';
const SYS_USER_MODIFY = HOME + '/userManage/users/list/modify/:id';
const SYS_ROLE = HOME + '/userManage/role/list';
const SYS_ROLE_MODIFY = HOME + '/userManage/role/list/modify/:id';
const SYS_MENU = HOME + '菜单管理';
const SYS_PERMISSION = HOME + '';
const SYS_PERMISSION_MODIFY = HOME + '';

const WC = HOME + '公厕管理';
const WC_INFO = HOME + '/toiletManage/toilet/list';
const WC_INFO_UPLOAD = HOME + '/toiletManage/toilet/list/upload';
const WC_INFO_MODIFY = HOME + '/toiletManage/toilet/list/modify/:id';
const WC_FIX = HOME + '/toiletManage/report/list';
const WC_FIX_MODIFY = HOME + '/toiletManage/report/list/:id';
const WC_EVALUATE = HOME + '/toiletManage/score/list';

const EQUIP = HOME + '设备管理';

const MEDIA = HOME + '多媒体管理';
const MEDIA_REVIEW = HOME + '/multimediaManage/multimedia/auditManageList';
const MEDIA_REVIEW_HIS = HOME + '/multimediaManage/multimedia/auditManageList/history';
const MEDIA_REVIEW_DETAIL = HOME + '/multimediaManage/multimedia/auditManageList/:id';
const MEDIA_PUB = HOME + '/multimediaManage/multimedia/mumediaRelease';
const MEDIA_PUB_MY = HOME + '/multimediaManage/multimedia/myRelease';
const MEDIA_PUB_HIS = HOME + '/multimediaManage/multimedia/releaseRecord';

const USER = HOME + '个人中心';

export default {
  HOME,
  OVERVIEW,
  ANALYZ,
  ANALYZ_WC,
  ANALYZ_HUMAN_TRAFFIC,
  ANALYZ_ENV,
  SYS,
  SYS_LOG,
  SYS_USER,
  SYS_USER_UPLOAD,
  SYS_USER_MODIFY,
  SYS_ROLE,
  SYS_ROLE_MODIFY,
  SYS_MENU,
  SYS_PERMISSION,
  SYS_PERMISSION_MODIFY,
  WC,
  WC_INFO,
  WC_INFO_UPLOAD,
  WC_INFO_MODIFY,
  WC_FIX,
  WC_FIX_MODIFY,
  WC_EVALUATE,
  EQUIP,
  MEDIA,
  MEDIA_REVIEW,
  MEDIA_REVIEW_HIS,
  MEDIA_REVIEW_DETAIL,
  MEDIA_PUB,
  MEDIA_PUB_MY,
  MEDIA_PUB_HIS,
  USER,
};
