const user = {
  base: {
    name: '吴上海',
    workYears: 3,
    hometown: '广东',
    age: '26',
    phone: '18620800179',
    sex: '男',
    avatar: require('@i/avatar.png'),
  },
  education: [{
    name: '化州市第二中学',
    startTime: '2011-09-01',
    endTime: '2014-06-08'
  }, {
    name: '广东轻工职业技术学院（肆业）',
    startTime: '2014-09-01',
    endTime: '2017-06-08'
  }, {
    name: '深圳大学（自考中）',
    startTime: '2019-07-01',
    endTime: '至今'
  }],
  company: [{
    name: '小马信息科技有限公司',
    startTime: '2017-07-01',
    endTime: '2018-05-07'
  }, {
    name: '绽放工场科技有限公司',
    startTime: '2018-06-03',
    endTime: '至今'
  }],
  project: [{
    name: '小马客户管理系统',
    startTime: '2017/06/26',
    endTime: '2018/05/01',
    port: 'PC端后台系统',
    introduction: '该软件是为企业建立一个客户信息收集、管理、分析和利用的信息系统。以客户数据的管理为核心，针对不同企业提供个人化定制。本人在该项目中主要负责数据可视化的相关部分，根据各种情景下的数据转换为可视图表。',
    technology: 'Jquery, ECharts',
    difficulty: '针对不同浏览器对css的实现不同，导致很多样式的兼容性，对于相关问题通常使用hack、更换实现方式、更换UI视图的方式解决或是规避。'
  }, {
    name: '智慧源',
    startTime: '2018/06/15',
    endTime: '2018/07/20',
    port: 'PC端企业官网',
    introduction: '为客户提供财务与会计及相关专业知识，接受委托向委托人提供业务解答、筹划及指导等服务。本人独立负责该项目，与产品经理沟通需求、将UI设计图转换成页面、对接后端数据。',
    technology: '涉及技术：Jquery、HTML5、CSS',
    difficulty: ''
  }, {
    name: '智税学院',
    startTime: '2018/07/15',
    endTime: '2018/09/05',
    port: '微信小程序',
    introduction: '该小程序主要是向给用户一个小程序端的财务咨询平台，通过线上报名，线下服务的模式。本人独立负责该项目，与产品经理沟通需求、将UI设计图转换成页面、对接后端数据。',
    technology: '原生语法、Javascript、CSS',
    difficulty: '由于报名流程甲方需求一变再变，导致数据处理起来十分棘手，令我意识到，程序在开发的工程中需要维持程序的灵活性，包括UI展示的适应性、数据的动态性等。'
  }, {
    name: '微门户',
    startTime: '2018/09/03',
    endTime: '至今',
    port: '微信公众号H5',
    introduction: '微门户是为社区提供综合的线上服务渠道，给社区居民提供线上报名活动、附近的人动态、快捷办理业务、提供老弱服务等等功能。本人独立负责该项目，与产品经理沟通需求、将UI设计图转换成页面、对接后端数据。',
    technology: 'vue、vue-router、vuex、wxsdk、axios、vant',
    difficulty: '主要是wxsdk的兼容性的问题，包括单页应用的签名问题，上传图片、视频等问题。还有就是一些样式兼容性问题、视频的展示播放问题。'
  }, {
    name: '智税云',
    startTime: '2019/05/16',
    endTime: '2019/10/14',
    port: '微信小程序',
    introduction: '该小程序主要是向给用户一个小程序端的财务咨询平台、财务知识普及、视频在线教学等服务。本人独立负责该项目，与产品经理沟通需求、将UI设计图转换成页面、对接后端数据。',
    technology: 'mpvue、vuex、van-webapp、flyio',
    difficulty: '小程序海报的生成、公司为个人购买服务并通过分享转送给个人，需要避免二次分享的问题。'
  }, {
    name: '多彩旅游圈',
    startTime: '2019/04/03',
    endTime: '2019/10/14',
    port: '微信小程序',
    introduction: '该小程序主要是为漳州本地提供一个吃喝玩乐的平台，可以购买商品（直接购买、团购、秒杀、砍价）并消费，同时也有积分系统，购买与签到均可以获取积分，积分可以兑换商品。本人独立负责该项目，与产品经理沟通需求、将UI设计图转换成页面、对接后端数据。',
    technology: 'mpvue、vuex、van-webapp、flyio',
    difficulty: '动态团购、秒杀与分享砍价的实现，处理数据及数据缓存上必须十分小心，很容易出现逻辑性的错误。'
  }, {
    name: '台账管理系统',
    startTime: '2019/09/26',
    endTime: '至今',
    port: 'PC端后台系统',
    introduction: '属于深圳社区管理系统下的子系统，以社区为单位，实现社区不同数据的信息收集、管理、分析和利用。本人独立负责该项目，与产品经理沟通需求、将UI设计图转换成页面、对接后端数据。',
    technology: 'vue、vuex、element、axios',
    difficulty: '按钮级的用户权限，创建表格的自定义数据以及属性，以及相应的增删改。'
  }],
  skill: [{
    skill: 'Webpack',
    sales: 20
  }, {
    skill: 'NodeJs',
    sales: 25
  }, {
    skill: 'React',
    sales: 30
  }, {
    skill: 'ElementUI',
    sales: 40
  }, {
    skill: 'VantUI',
    sales: 60
  }, {
    skill: 'Html',
    sales: 70
  }, {
    skill: 'Css',
    sales: 75
  }, {
    skill: 'JS',
    sales: 80
  }, {
    skill: 'Vue',
    sales: 85
  }]
}

export default user