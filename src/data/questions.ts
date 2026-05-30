export type Dimension = 'FZ' | 'XW' | 'CT' | 'SN';

export interface DimensionInfo {
  code: Dimension;
  name: string;
  leftLabel: string;
  rightLabel: string;
}

export interface Question {
  id: number;
  dimension: Dimension;
  content: string;
  reverse: boolean;
}

export const dimensions: DimensionInfo[] = [
  { code: 'FZ', name: '发疯/佛系', leftLabel: '发疯', rightLabel: '佛系' },
  { code: 'XW', name: '玄学/唯物', leftLabel: '玄学', rightLabel: '唯物' },
  { code: 'CT', name: '脆皮/铁人', leftLabel: '脆皮', rightLabel: '铁人' },
  { code: 'SN', name: '社恐/社牛', leftLabel: '社恐', rightLabel: '社牛' },
];

export const questions: Question[] = [
  {
    id: 1,
    dimension: 'FZ',
    content: '早上睁开眼的第一反应往往不是“又是美好的一天”，而是“怎么这么困，和没睡一样”，并试图用意念延缓上课时间。',
    reverse: false,
  },
  {
    id: 2,
    dimension: 'FZ',
    content: '在经历了一整天无意义的忙碌（或者单纯躺了一天）后，晚上躺在床上会突然产生一种“想无理由地尖叫并爬行”的冲动。',
    reverse: false,
  },
  {
    id: 3,
    dimension: 'FZ',
    content: '被室友定错时间的闹钟吵醒，或者刚泡好的泡面被不小心打翻，你的内心竟然毫无波澜，甚至还能平静地打扫残局，觉得自己离修成正果只差一件袈裟。',
    reverse: true,
  },
  {
    id: 4,
    dimension: 'FZ',
    content: '情绪波动像过山车：上一秒还在为搞笑视频傻乐，下一秒就随伤感BGM开始emo。',
    reverse: false,
  },
  {
    id: 5,
    dimension: 'FZ',
    content: '遇到不顺心的小事，第一反应是这世界怎么对我这么坏。',
    reverse: false,
  },
  {
    id: 6,
    dimension: 'FZ',
    content: '聊天时高频使用“啊啊啊啊”、“救命”、“要碎了”等咆哮体词汇。',
    reverse: false,
  },
  {
    id: 7,
    dimension: 'FZ',
    content: '收集的表情包越来越怪异、抽象，且表情包的“发疯”程度通常代表了你当天的真实精神状态。',
    reverse: false,
  },
  {
    id: 8,
    dimension: 'FZ',
    content: '在拥挤喧闹的食堂或满是期末焦虑的自习室里，你能随时随地进入“断网入定”状态，外界的鸡飞狗跳和同学们的各种八卦，都无法在你的内心激起半点涟漪。',
    reverse: true,
  },

  {
    id: 9,
    dimension: 'XW',
    content: '期末考试前一天，比起挑灯夜读，你更愿意花半小时把头像换成“过神”，并在朋友圈疯狂转发锦鲤或孔子。',
    reverse: false,
  },
  {
    id: 10,
    dimension: 'XW',
    content: '遇到倒霉事或心情不好时，你的第一反应是打开星盘看看“最近是不是水逆”。',
    reverse: false,
  },
  {
    id: 11,
    dimension: 'XW',
    content: '出门面试、展示或者参加重要活动前，你必须进行某种奇怪的“个人仪式”，比如穿戴某样特殊的东西或听同一首歌。',
    reverse: false,
  },
  {
    id: 12,
    dimension: 'XW',
    content: '极度依赖 MBTI 或星座来为自己的行为开脱，比如：“我是 P 人所以我没做计划很正常”、“我是土象星座所以我不想理人”。',
    reverse: false,
  },
  {
    id: 13,
    dimension: 'XW',
    content: '对于“锦鲤”、“电子木鱼”等赛博玄学完全免疫。你坚信如果期末考试挂了，那唯一的科学解释就是“知识没有进脑子”，跟出门先迈哪只脚毫无关系。',
    reverse: true,
  },
  {
    id: 14,
    dimension: 'XW',
    content: '遇到双数时间（如11:11）或者刷到流星视频，你的大脑会自动下达指令，哪怕手头在忙也会立刻在评论区许愿。',
    reverse: false,
  },
  {
    id: 15,
    dimension: 'XW',
    content: '看到室友对着星盘分析性格或者为了“水逆”长吁短叹时，你并不相信，主打一个绝对的人间清醒。',
    reverse: true,
  },
  {
    id: 16,
    dimension: 'XW',
    content: '在面对未来规划（考研、就业）的巨大压力时，你坚信“在上班和上进之间，我选择上香”。',
    reverse: false,
  },

  {
    id: 17,
    dimension: 'CT',
    content: '拥有大学生群体中极为罕见的“铁胃”。不管是学校后街满是红油的淀粉肠，还是超级辣的地方菜系，吃完后第二天依然能活蹦乱跳，肠胃稳如泰山。',
    reverse: true,
  },
  {
    id: 18,
    dimension: 'CT',
    content: '嘴里喝着冰美式或奶茶，手里拿着熬夜熬出来的保温杯泡枸杞，坚信这是“朋克养生”。',
    reverse: false,
  },
  {
    id: 19,
    dimension: 'CT',
    content: '稍微走两步路或者爬个三楼，呼吸急促得像刚跑完一万米，感觉肺部和双腿集体罢工。',
    reverse: false,
  },
  {
    id: 20,
    dimension: 'CT',
    content: '堪称宿舍里的“特种兵”。哪怕前一天晚上和朋友去KTV通宵或者开黑到凌晨四点，第二天早八的高数课依然能准时到达，精神抖擞且绝不打瞌睡。',
    reverse: true,
  },
  {
    id: 21,
    dimension: 'CT',
    content: '身体总有莫名其妙的“小故障”，比如打个喷嚏闪了腰、伸个懒腰抽筋、吃口热饭嘴里起泡。',
    reverse: false,
  },
  {
    id: 22,
    dimension: 'CT',
    content: '偶尔尝试做一次运动，之后的两三天里身体像被卡车碾过一样，下楼梯都得扶着墙。',
    reverse: false,
  },
  {
    id: 23,
    dimension: 'CT',
    content: '一天比一天睡得晚，即将实现“美国作息”，感觉自己可以参加熬夜大赛。',
    reverse: false,
  },
  {
    id: 24,
    dimension: 'CT',
    content: '经常在换季、降温或期末考时雷打不动地感冒生病，免疫系统一到关键时刻就容易罢工。',
    reverse: false,
  },

  {
    id: 25,
    dimension: 'SN',
    content: '走在路上远远看到认识的人，会立刻低头看手机或假装系鞋带以避开视线。',
    reverse: false,
  },
  {
    id: 26,
    dimension: 'SN',
    content: '听到老师说“下周小组展示，大家自由分组”时，内心会拉响防空警报，焦虑瞬间拉满。',
    reverse: false,
  },
  {
    id: 27,
    dimension: 'SN',
    content: '在小组合作中，很害怕和别人交流，从来都不是主导安排的组长或成员。',
    reverse: false,
  },
  {
    id: 28,
    dimension: 'SN',
    content: '多人聚会中，宁愿当个安静吃饭、低头玩手机的背景板，也不想主动跟不是特熟的人搭话。',
    reverse: false,
  },
  {
    id: 29,
    dimension: 'SN',
    content: '课堂上老师问“谁愿意来分享一下”，在全班陷入死寂、疯狂低头看桌子时，你会觉得这简直就是为你量身定做的脱口秀舞台，并毫不犹豫地举起手。',
    reverse: true,
  },
  {
    id: 30,
    dimension: 'SN',
    content: '只要戴上降噪耳机，哪怕没放音乐，也会觉得获得免死金牌，以正当理由不回应周围。',
    reverse: false,
  },
  {
    id: 31,
    dimension: 'SN',
    content: '极度害怕在公开场合“露脸”或出风头，比如被老师点名回答问题会让你心跳加速。',
    reverse: false,
  },
  {
    id: 32,
    dimension: 'SN',
    content: '坐高铁、搭网约车或者在食堂拼桌时，只要旁边坐了个活人，你就能在三句话内顺理成章地跟对方聊起老家特产或专业八卦，从不让空气安静下来。',
    reverse: true,
  },
];
