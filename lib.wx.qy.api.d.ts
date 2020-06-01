/**
 * @desc 企业微信小程序 api
 * @date 2020/06/01  六一儿童节快乐
 * @author ShineShao <xiaoshaoqq@gmail.com>
 * 
 * @link https://github.com/freeshineit/lib.wx.qy.api/blob/master/lib.wx.qy.api.d.ts
 */
declare namespace WechatMiniprogram {
  interface Wx {
    qy: {
      /**
       * @desc 获取企业微信派发的临时登录凭证
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92388
       *
       * @example
       * ```js
       * wx.qy.login({
       *  timeout: 6000,
       *  success: (res) => {
       *   if (res.code) {
       *   //发起网络请求
       *    wx.request({
       *     url: "https://test.com/onLogin",
       *     data: {
       *       code: res.code,
       *     },
       *    });
       *   } else {
       *     console.log("登录失败！" + res.errMsg);
       *   }
       *  },
       *  fail: (err) => {
       *    console.log(err);
       *  },
       *  complete: (res) => {
       *    console.log(res);
       *  },
       * });
       *
       * ```
       */
      login(obj?: {
        timeout?: Number;
        success?: (res?: { errMsg: string; code: string }) => void;
        fail?: (res?: { errMsg: string }) => void;
        complete?: (res?: { errMsg: string; code?: string }) => void;
      }): void;

      /**
       * @desc 校验用户当前 session_key 是否有效
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92390
       *
       * @example
       * ```js
       * wx.qy.checkSession({
       *   success: (res) => {
       *        console.log(res)
       *   },
       *   fail: (err) => {
       *     console.log(err)
       *   },
       *   complete: (res) => {
       *     console.log(res)
       *   }
       * })
       * ```
       */
      checkSession(obj?: {
        success?: (res?: { errMsg: string; expireIn: number }) => void;
        fail?: (res?: { errMsg: string; errCode?: number }) => void;
        complete?: (res?: {
          errMsg: string;
          expireIn?: number;
          errCode?: number;
        }) => void;
      }): void;

      /**
       * @desc 判断企业微信专有接口、回调、参数等是否在当前版本可用。注意wx.canIUse判断的是微信小程序通用接口（即wx.[接口名]）是否在当前版本可用。
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92394
       *
       * @param schema string
       *
       * @return {boolean} 判断结果
       *
       * @example
       * ```js
       * wx.qy.canIUse('login.success.code')
       * wx.qy.canIUse('getNFCReaderState')
       * wx.qy.canIUse("getAvatar.success.avatar")
       * ```
       */
      canIUse(
        /** 使用 `使用 ${API}.${method}.${param}.${options} 或者 ${component}.${attribute}.${option} 方式来调用 */
        schema: string,
      ): boolean;

      /**
       * @desc 获取企业成员基本信息
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92396
       */
      getEnterpriseUserInfo(obj?: {
        timeout?: Number;
        success?: (res?: {
          userInfo: {
            name: string;
            gender: number; /**企业成员的性别，0表示未定义，1表示男性，2表示女性 */
            language: string;
          };
          rawData: string;
          signature: string;
          encryptedData: string;
          iv: string;
          [key: string]: any;
        }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 获取企业成员头像
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92397
       */
      getAvatar(obj?: {
        timeout?: Number;
        success?: (res?: { avatar: string; [key: string]: any }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 获取企业成员个人二维码
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92398
       */
      getQrCode(obj?: {
        timeout?: Number;
        success?: (res?: { qrCode: string }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 打开通讯录选人功能
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92403
       *
       * @example
       * ```js
       * wx.qy.selectEnterpriseContact({
       *  fromDepartmentId: -1,// 必填，-1表示打开的通讯录从自己所在部门开始展示, 0表示从最上层开始
       *  mode: "single",// 必填，选择模式，single表示单选，multi表示多选
       *  type: ["department", "user"],// 必填，选择限制类型，指定department、user中的一个或者多个
       *  selectedDepartmentIds: ["2","3"],// 非必填，已选部门ID列表。用于多次选人时可重入
       *  selectedUserIds: ["lisi","lisi2"],// 非必填，已选用户ID列表。用于多次选人时可重入
       *  success: function(res) {
       *    var selectedDepartmentList = res.result.departmentList;// 已选的部门列表
       *    for (var i = 0; i < selectedDepartmentList.length; i++){
       *        var department = selectedDepartmentList[i];
       *        var departmentId = department.id;// 已选的单个部门ID
       *        var departemntName = department.name;// 已选的单个部门名称
       *    }
       *    var selectedUserList = res.result.userList; // 已选的成员列表
       *    for (var i = 0; i < selectedUserList.length; i++){
       *        var user = selectedUserList[i];
       *        var userId = user.id; // 已选的单个成员ID
       *        var userName = user.name;// 已选的单个成员名称
       *        var userAvatar= user.avatar;// 已选的单个成员头像
       *     }
       *   }
       * });
       * ```
       */
      selectEnterpriseContact(obj: {
        fromDepartmentId: -1 | 0;
        mode: "single" | "multi";
        type: string[]; // 选择限制类型，指定”department”、”user”中的一个或者多个
        selectedDepartmentIds?: string[];
        selectedUserIds?: string[];
        success?: (res?: {
          result: {
            departmentList?: {
              id?: string;
              name?: string;
              [key: string]: any;
            }[];
            userList?: {
              id?: string;
              name?: string;
              avatar?: string;
              [key: string]: any;
            }[];
          };
        }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 外部联系人选人接口
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92402
       *
       * @example
       * ```js
       * wx.qy.selectExternalContact({
       *   filterType: 1,
       *   success: (res) => {},
       *   fail: (err) => {},
       *   complete: (res) => {}
       * })
       * ```
       */
      selectExternalContact(obj?: {
        filterType?: 0 | 1;
        success?: (res?: { userIds?: string[] }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 打开个人信息页
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92404
       *
       * @example
       * ```js
       * wx.qy.openUserProfile({
       *  type: 1,
       *  userid: "wmEQlEGwAAHxbWYDOK5u3Af13xlYAAAA",
       *  success: (res) => {},
       *  fail: (err) => {},
       *  complete: (res) => {}
       * })
       * ```
       */
      openUserProfile(obj?: {
        type?: 1 | 2;
        userid?: string;
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 创建会话接口
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92405
       *
       * @example
       * ```js
       * wx.qy.openUserProfile({
       *   groupName: '讨论组',
       *   userIds: 'zhangsan;lisi;wangwu',
       *   externalUserIds: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
       *   success: (res) => {},
       *   fail: (err) => {},
       *   complete: (res) => {}
       * })
       * ```
       */
      openUserProfile(obj: {
        groupName: string;
        userIds?: string;
        externalUserIds?: string;
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 获取当前外部联系人userid
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92406
       */
      getCurExternalContact(obj?: {
        success?: (res?: { userId?: string }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 此接口支持企业成员把小程序，传递到群发助手进行发送。为了防止滥用，同一个成员每日向一个客户最多可群发一条消息，每次群发最多可选200个客户。
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92407
       *
       * @example
       * ```js
       * wx.qy.getCurExternalContact({
       *   appid: "appid",//小程序的appid
       *   title: "this is title", //小程序消息的title
       *   imgUrl:"/appData/pic/pic1.jpg",//小程序消息的封面图
       *   page:"/index/page.html", //小程序消息打开后的路径，注意要以.html作为后缀，否则在微信端打开会提示找不到页面
       *   success: function(res) {//todo:},
       *   fail: function(res) {//todo:},
       *   complete: function(res) {//todo:}
       * })
       * ```
       */
      getCurExternalContact(obj: {
        appid: string;
        title: string;
        imgUrl: string;
        page: string;
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 获取当前客户群的群ID
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92684
       */
      getCurExternalChat(obj?: {
        success?: (res?: { chatId?: string }) => void;
        // 下面两个属性没有实践
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 通过聊天工具栏向当前会话发送消息，支持多种消息格式，包括文本(“text”)，图片(“image”)，视频(“video”)，文件(“file”)、H5(“news”）和小程序(“miniprogram”)。
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92685
       *
       * @example
       * ```js
       * wx.qy.sendChatMessage({
       *  msgtype:"text", //消息类型，必填
       *  text: {
       *    content:"你好", //文本内容
       *  },
       *  image:{
       *    mediaid: "", //图片的素材id
       *  },
       *  video:{
       *   mediaid: "", //视频的素材id
       *  },
       *  file:{
       *   mediaid: "", //文件的素材id
       *  },
       *  news:{
       *   link: "", //H5消息页面url 必填
       *   title: "", //H5消息标题
       *   desc: "", //H5消息摘要
       *   imgUrl: "", //H5消息封面图片URL
       *  },
       *  miniprogram:{
       *   appid: "小程序的appid",//小程序的appid
       *   title: "this is title", //小程序消息的title
       *   imgUrl:"/appData/pic/pic1.jpg",//小程序消息的封面图
       *   page:"/index/page.html", //小程序消息打开后的路径，注意要以.html作为后缀，否则在微信端打开会提示找不到页面
       *  },
       *  success: function(res) {
       *    //todo:
       *  }
       * });
       * ```
       */
      sendChatMessage(obj: {
        msgtype: string;
        text?: {
          content?: string;
        };
        image?: {
          mediaid: string;
        };
        video?: {
          mediaid: string;
        };
        file?: {
          mediaid?: string;
        };
        news?: {
          link?: string;
          title?: string;
          desc?: string;
          imgUrl?: string;
        };
        miniprogram?: {
          appid: string;
          title: string;
          imgUrl: string;
          page: string;
        };
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 此接口支持企业成员把小程序，传递到群发助手进行发送。
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92686
       *
       * @example
       * ```js
       * wx.qy.shareToExternalChat({
       *    appid: 'appid' // 必填
       *    title: 'title' // 必填
       *    imgUrl: 'image/img.png' // 必填
       *    page: "/index/page.html", //小程序消息打开后的路径，注意要以.html作为后缀，否则在微信端打开会提示找不到页面
       *    success: (res) => {},
       *    fail: (err) => {},
       *    complete: (res) => {},
       * })
       * ```
       */
      shareToExternalChat(obj: {
        appid: string;
        title: string;
        imgUrl: string;
        page: string;
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 判断当设备是否支持 NFC 能力
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92409
       */
      getNFCReaderState(obj?: {
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 打开 NFC 模块，仅支持安卓系统
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92410
       */
      startNFCReader(obj?: {
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;

      /**
       * @desc 关闭 NFC 模块，仅支持安卓系统
       * @link https://work.weixin.qq.com/api/doc/90001/90144/92411
       */
      stopNFCReader(obj?: {
        // 下面三个属性没有实践
        success?: (res?: any) => void;
        fail?: (res?: any) => void;
        complete?: (res?: any) => void;
      }): void;
    };
  }
}
