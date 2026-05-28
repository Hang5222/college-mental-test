// 人格类型代码（4个维度，每个维度2种倾向）
// F/Z: 发疯(F) / 佛系(Z)
// L/J: 摆烂(L) / 内卷(J)
// C/T: 脆皮(C) / 铁人(T)
// S/N: 社恐(S) / 社牛(N)
export type PersonalityCode =
  | 'FLCS' | 'FLCN' | 'FLTS' | 'FLTN'
  | 'FJCS' | 'FJCN' | 'FJTS' | 'FJTN'
  | 'ZLCS' | 'ZLCN' | 'ZLTS' | 'ZLTN'
  | 'ZJCS' | 'ZJCN' | 'ZJTS' | 'ZJTN';

// 单个维度结果
export interface DimensionResult {
  code: string;
  leftLabel: string;
  rightLabel: string;
  score: number; // 0-100，越靠近0越偏向leftLabel，越靠近100越偏向rightLabel
}

// 测试结果
export interface TestResult {
  code: PersonalityCode;
  name: string;
  quote: string;
  analysis: string;
  advice: string;
}

// 16种最终诊断结果
export const results: TestResult[] = [
  {
    code: 'FLCS',
    name: '地府在逃幽灵',
    quote: '我劝你少管我，我也少管我自己。',
    analysis: '精神天天发疯，现实唯唯诺诺。身体极脆，学业能混则混，社交能避则避。',
    advice: '多睡觉、少看手机，维持生命体征是首要任务。',
  },
  {
    code: 'FLCN',
    name: '带病演出的马戏团小丑',
    quote: '身体已经碎了，但舞台不能没有我！',
    analysis: '浑身是病，学业荒废，但在聚会中极其活跃，用自嘲逗笑大家，内心在发疯。',
    advice: '卸下你的幽默防备，你的身体需要休息。',
  },
  {
    code: 'FLTS',
    name: '网络战神与现实哑巴',
    quote: '网线是我的生命维持通道。',
    analysis: '拥有坚硬体质，现实内向透明，学业摆烂。在网络上是表情包狂魔和发疯梗王。',
    advice: '试着把网络上的幽默感分 10% 给现实生活。',
  },
  {
    code: 'FLTN',
    name: '快乐风男/风女',
    quote: '只要我跑得够快，DDL和烦恼就追不上我。',
    analysis: '铁打的身体和社交，学业不重要。每天精力无限，快快乐乐地和朋友无厘头发疯。',
    advice: '维持快乐，但期末考前一周务必找个学霸组员救你一命。',
  },
  {
    code: 'FJCS',
    name: '高压锅里的脆皮学术渣',
    quote: '我卷了，但也快死了。',
    analysis: '焦虑型人格，害怕社交。学业疯狂内卷，哪怕头秃胃痛也坚持写DDL，心里在发疯狂叫。',
    advice: '绩点不是全部，体检报告更重要。学会放过自己。',
  },
  {
    code: 'FJCN',
    name: '刀尖舔血的演讲家',
    quote: '再来一杯冰美式，我还能给组员讲三小时PPT！',
    analysis: '身体极脆全靠咖啡吊命，社交面广挑大梁。看重绩点卷得要死，处于崩溃边缘发疯。',
    advice: '把一部分活分给组员，你不是超人，早点睡。',
  },
  {
    code: 'FJTS',
    name: '地窖里的复仇键盘侠',
    quote: '别跟我说话，我在拯救世界（指写论文）。',
    analysis: '素质极强能连轴转，社交为零，高产的学习机器。压力大时用奇怪的方式默默发疯。',
    advice: '生活不止有代码和论文，偶尔抬头看看身边的风景。',
  },
  {
    code: 'FJTN',
    name: '核动力向日葵',
    quote: '地球不爆炸，我们不放假！大家跟我一起卷！',
    analysis: '铁打的身体和社交，狂热卷王，带动大家一起卷。因为卷得太狠情绪偶尔亢奋发疯。',
    advice: '强人一个！但给身边的"脆皮"留条活路。',
  },
  {
    code: 'ZLCS',
    name: '植物人大学生',
    quote: '一切随缘，最好别烦我。',
    analysis: '彻底断电心如止水。身体差，社交自闭，学业摆烂。过着"呼吸就算活着"的植物人生活。',
    advice: '虽然舒服，但也需要阳光，试着每天出宿舍走走。',
  },
  {
    code: 'ZLCN',
    name: '养生馆驻场嘉宾',
    quote: '大家开心就好，我的腰先不行了。',
    analysis: '不爱学习身体脆，但性格好温和佛系。喜欢聊天，是朋友的情绪树洞，吃着止痛药聚会。',
    advice: '好陪伴者，但别忘照顾自己，身体是摆烂的本钱。',
  },
  {
    code: 'ZLTS',
    name: '沉思的石雕',
    quote: '世界很喧嚣，我只想做一块石头。',
    analysis: '身体极好但在宿舍打游戏睡觉。彻底佛系不焦虑，对未来无规划，当快乐的透明人。',
    advice: '很安逸，但小心毕业重击，可以稍微了解外面的世界。',
  },
  {
    code: 'ZLTN',
    name: '路边的快乐石狮子',
    quote: '今天天气真好，去哪里玩都可以。',
    analysis: '身体棒性格随和，社交广不内卷。面对挫折淡淡一句"行吧"就过了，轻松漫游大学。',
    advice: '保持好心态，你是16种人格里心理最健康的一个。',
  },
  {
    code: 'ZJCS',
    name: '木鱼超度型卷王',
    quote: '功德-1，绩点+1。',
    analysis: '身体脆弱害怕社交，但默默读书。毫无戾气，吃着药淡定刷题，带有普度众生的超然感。',
    advice: '学习之余多保养脾胃，身体弱就不要强撑熬夜。',
  },
  {
    code: 'ZJCN',
    name: '佛光普照的领头羊',
    quote: '没关系，PPT我来改，大家早点睡。',
    analysis: '身体很脆心态极稳。成绩好且温柔，在小组解决矛盾，用最佛系的态度卷最高绩点。',
    advice: '别总把责任一个人揽，善良的你也需要照顾。',
  },
  {
    code: 'ZJTS',
    name: '冷酷的复习机器',
    quote: '心中无物，拔剑自然神。',
    analysis: '底子极好，不社交不废话效率极高。没有焦虑内耗，把学习当程序跑，扫地僧式学霸。',
    advice: '非常强大独立，但大学也是交友时期，试着交朋友。',
  },
  {
    code: 'ZJTN',
    name: '太极拳宗师',
    quote: '人生如逆旅，多学一点是一点。',
    analysis: '体能充沛交友广阔绩点第一。稳如老狗，在复杂社交和竞争中游刃有余，借力打力。',
    advice: '大学完美适应者，继续保持你的节奏，前途光明。',
  },
];
