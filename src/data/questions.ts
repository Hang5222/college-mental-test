// 题目维度类型
export type Dimension = 'FZ' | 'LJ' | 'CT' | 'SN';

// 维度信息
export interface DimensionInfo {
  code: Dimension;
  name: string;
  leftLabel: string;  // 维度左侧标签（如：发疯）
  rightLabel: string; // 维度右侧标签（如：佛系）
}

// 单个题目
export interface Question {
  id: number;
  dimension: Dimension;
  content: string;
}

// 维度定义
export const dimensions: DimensionInfo[] = [
  { code: 'FZ', name: '发疯/佛系', leftLabel: '发疯', rightLabel: '佛系' },
  { code: 'LJ', name: '摆烂/内卷', leftLabel: '摆烂', rightLabel: '内卷' },
  { code: 'CT', name: '脆皮/铁人', leftLabel: '脆皮', rightLabel: '铁人' },
  { code: 'SN', name: '社恐/社牛', leftLabel: '社恐', rightLabel: '社牛' },
];

// 32道测试题
export const questions: Question[] = [
  // [F/Z] 维度 (发疯/佛系) - 题目 1-8
  {
    id: 1,
    dimension: 'FZ',
    content: '早上睁开眼的第一反应往往不是"又是美好的一天"，而是"怎么还没到晚上"，并试图用意念延缓上课时间。',
  },
  {
    id: 2,
    dimension: 'FZ',
    content: '在经历了一整天无意义的忙碌（或者单纯躺了一天）后，晚上躺在床上会突然产生一种"想无理由地尖叫并爬行"的冲动。',
  },
  {
    id: 3,
    dimension: 'FZ',
    content: '收集的表情包越来越怪异、抽象，且表情包的"发疯"程度通常代表了你当天的真实精神状态。',
  },
  {
    id: 4,
    dimension: 'FZ',
    content: '情绪波动像过山车：上一秒还在为搞笑视频傻乐，下一秒听到室友翻个身，突然就觉得人生索然无味。',
  },
  {
    id: 5,
    dimension: 'FZ',
    content: '遇到不顺心的小事（如电脑死机、网速卡顿），第一反应不是耐心重试，而是在脑海里先把桌子掀翻十次。',
  },
  {
    id: 6,
    dimension: 'FZ',
    content: '聊天时高频使用"啊啊啊啊"、"救命"、"要碎了"等咆哮体词汇，甚至现实中也经常忍不住发出无声的呐喊。',
  },
  {
    id: 7,
    dimension: 'FZ',
    content: '经常因为微不足道的事（如外卖送漏了餐具、伞被风吹翻），瞬间触发"毁灭世界吧，累了"的宏大厌世感。',
  },
  {
    id: 8,
    dimension: 'FZ',
    content: '脑内剧场极其丰富，走在校道上能脑补出一整部灾难片或复仇爽剧，脸上的表情也随着脑补剧情不断变化。',
  },

  // [L/J] 维度 (摆烂/内卷) - 题目 9-16
  {
    id: 9,
    dimension: 'LJ',
    content: '只要距离Deadline还有24小时以上，你的大脑就会自动默认这件事情"还没开始设计"。',
  },
  {
    id: 10,
    dimension: 'LJ',
    content: '在图书馆坐了3个小时，2.5小时在挑BGM、调坐姿和玩手机，最后半小时自我愧疚。',
  },
  {
    id: 11,
    dimension: 'LJ',
    content: '只要老师在课上不点名，那节课在你的记忆和认知里就自动归类为"这周没上过"。',
  },
  {
    id: 12,
    dimension: 'LJ',
    content: '面对未来的规划处于"间歇性踌躇满志，持续性混吃等死"的状态，所有的Plan都变成了"顺其自然"。',
  },
  {
    id: 13,
    dimension: 'LJ',
    content: '考试周前夕，比起认真复习，你花更多的时间在朋友圈或群聊里转发"考试不挂科"的玄学锦鲤。',
  },
  {
    id: 14,
    dimension: 'LJ',
    content: '选课的第一标准绝不是"好不好学"，而是"老师给分高不高、管得松不松、能不能逃课"。',
  },
  {
    id: 15,
    dimension: 'LJ',
    content: '制定了完美的学习计划，但早上起晚10分钟就会觉得"今天毁了"，并理直气壮躺一天。',
  },
  {
    id: 16,
    dimension: 'LJ',
    content: '对成绩的底线低到了"只要不取消学位证就行"，听到室友说"我也没复习"时感到极大救赎。',
  },

  // [C/T] 维度 (脆皮/铁人) - 题目 17-24
  {
    id: 17,
    dimension: 'CT',
    content: '蹲下起立时，膝盖或腰椎会发出清脆的"咔哒"声，感觉自己像一个随时会散架的乐高。',
  },
  {
    id: 18,
    dimension: 'CT',
    content: '嘴里喝着冰美式或奶茶，手里拿着熬夜熬出来的保温杯泡枸杞，坚信这是"朋克养生"。',
  },
  {
    id: 19,
    dimension: 'CT',
    content: '稍微走两步路或者爬个三楼，呼吸急促得像刚跑完一万米，感觉肺部和双腿集体罢工。',
  },
  {
    id: 20,
    dimension: 'CT',
    content: '深夜12点："必须马上睡觉。" 凌晨2点："深海鱼类为什么不会被压扁？让我百度一下。"',
  },
  {
    id: 21,
    dimension: 'CT',
    content: '身体总有莫名其妙的"小故障"，比如打个喷嚏闪了腰、伸个懒腰抽筋、吃口热饭嘴里起泡。',
  },
  {
    id: 22,
    dimension: 'CT',
    content: '偶尔尝试做一次运动，之后的两三天里身体像被卡车碾过一样，下楼梯都得扶着墙。',
  },
  {
    id: 23,
    dimension: 'CT',
    content: '深夜躺下时会在脑海里盘算："如果我今天2点睡7点起，还能活多少年？"然后继续玩手机。',
  },
  {
    id: 24,
    dimension: 'CT',
    content: '经常在换季、降温或期末考时雷打不动地感冒生病，免疫系统一到关键时刻就"一键摆烂"。',
  },

  // [S/N] 维度 (社恐/社牛) - 题目 25-32
  {
    id: 25,
    dimension: 'SN',
    content: '走在路上远远看到辅导员或熟人，会立刻低头看手机或假装系鞋带以避开视线。',
  },
  {
    id: 26,
    dimension: 'SN',
    content: '听到老师说"下周小组展示，大家自由分组"时，内心会拉响防空警报，焦虑瞬间拉满。',
  },
  {
    id: 27,
    dimension: 'SN',
    content: '在小组合作中，最怕遇到"人间蒸发型"组员，但自己有时也想在群里发个"收到"后隐身。',
  },
  {
    id: 28,
    dimension: 'SN',
    content: '班级聚会中，宁愿当个安静吃饭、低头玩手机的背景板，也不想主动跟陌生同学搭讪。',
  },
  {
    id: 29,
    dimension: 'SN',
    content: '绝对不主动接听陌生电话，即使是外卖快递，也坚信"发短信沟通"才是人类最伟大发明。',
  },
  {
    id: 30,
    dimension: 'SN',
    content: '只要戴上降噪耳机，哪怕没放音乐，也会觉得获得免死金牌，可以理直气壮不回应周围。',
  },
  {
    id: 31,
    dimension: 'SN',
    content: '极度害怕在公开场合"露脸"或出风头，比如被老师点名回答问题会让你心跳加速。',
  },
  {
    id: 32,
    dimension: 'SN',
    content: '在走廊或洗手间遇到不深交的同学，会故意磨蹭时间（如慢动作洗手），直到对方离开。',
  },
];
