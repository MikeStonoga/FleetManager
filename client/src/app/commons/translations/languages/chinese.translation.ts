import { Injectable } from '@angular/core';
import { AppTranslation } from '../app.translation';
import { ITranslationStrategy } from '../translation.strategy';

export const chineseTranslation: AppTranslation = {
  login: {
    enter: '登录',
    user: '用户名',
    password: '密码',
    logoutLabel: '退出登录',
  },
  commons: {
    filter: '筛选',
    yes: '是',
    no: '否',
    selectLanguage: '选择语言',
    areYouSure: '您确定吗？',
    removed: '已成功删除',
    remove: '删除',
    registered: '注册成功',
    register: '注册',
    refresh: '刷新',
    save: '保存',
    properties: { name: '名称' },
    vehiclesCount: '车辆数量',
    goToDetails: '查看详细信息',
    edit: '编辑',
    edited: '编辑成功',
    goBackToList: '返回列表',
  },
  fleets: {
    title: '车队',
    fleet: '车队',
  },
  vehicles: {
    title: '车辆',
    vehicle: '车辆',
    chassisSeries: '底盘系列',
    chassisNumber: '底盘编号',
    fleet: '车队',
    type: '类型',
    numberOfPassengers: '乘客人数',
    color: '颜色',
  },
  vehicleTypes: {
    title: '车辆类型',
    vehicleType: '车辆类型',
  },
  mainToolbar: {
    menus: {
      goTo: '前往',
      home: '主页',
    },
    buttons: {
      goHome: { label: '主页' },
    },
  },
};

@Injectable()
export class ChineseStrategy implements ITranslationStrategy {
  readonly languageCode = 'zh-CN';
  readonly languageName = '中文 (简体)';

  getTranslation(): AppTranslation {
    return chineseTranslation;
  }
}
