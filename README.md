# 当代大学生精神状态体检报告

一个有趣的大学生精神状态测试 Web 应用（娱乐向），通过 32 道趣味题目评估你的精神状态人格类型，并生成一份风格化的"体检报告"。

## 项目结构

```
src/
├── components/
│   ├── HomeView.tsx          # 首页
│   ├── QuizView.tsx          # 答题页
│   ├── CalculatingView.tsx   # 计算页（含图片预加载）
│   └── ResultView.tsx        # 结果页
├── data/
│   ├── questions.ts          # 32 道题目数据
│   └── results.ts            # 16 种人格结果数据
├── hooks/
│   └── useQuiz.ts            # 测试逻辑与状态管理
├── utils/
│   └── history.ts            # localStorage 历史记录管理
├── assets/
│   ├── image/                # 16 张表情包（WebP 格式）
│   └── avatar.jpg            # 开发者头像
└── App.tsx                   # 主应用组件
```

## 人格类型说明

四维代码含义：

| 维度 | 高分（>=24） | 低分（<24） |
|------|-------------|------------|
| FZ   | 发疯 (F)    | 佛系 (Z)   |
| XW   | 玄学 (X)    | 唯物 (W)   |
| CT   | 脆皮 (C)    | 铁人 (T)   |
| SN   | 社恐 (S)    | 社牛 (N)   |

例如 `FXCS` = 发疯 + 玄学 + 脆皮 + 社恐 = "赛博祈福的小脆皮"


