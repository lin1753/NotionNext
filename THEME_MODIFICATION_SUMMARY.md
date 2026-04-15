# NotionNext 二次元液态玻璃主题 - 修改总结文档

## 🎯 项目目标

将 NotionNext 的个人博客重构为**二次元液态玻璃风格 (Liquid Glass Design)**，融入初音未来 (Miku) 的青绿色配色，打造高级感的视觉体验。

### 设计灵感来源
- **Apple iOS 液态玻璃**: 采用 Material Design 3 的 Elevation System，多层阴影+模糊背景
- **初音未来配色**: `#00C2D1` (青绿) 和 `#0A84FF` (科技蓝) 作为主题色
- **全屏背景**: 使用 `/miku.jpg` 作为全屏壁纸，配合半透明遮罩

---

## 📁 修改文件清单

### 1. 主题样式文件
**路径**: `themes/simple/style.js`

**主要修改内容**:
- ✅ MD3 Elevation System - 玻璃卡片效果 (glass-card)
- ✅ Elevated Card - 浮动卡片带青绿色边框光晕
- ✅ FAB Button - 圆形悬浮按钮带渐变和阴影
- ✅ Chip Styles - 标签样式（filled/tonal 两种变体）
- ✅ 全屏背景 - miku.jpg 背景图 + 半透明遮罩
- ✅ 导航菜单 - 圆角按钮 + 悬停效果
- ✅ 文章卡片 - 玻璃质感 + 悬停上浮
- ✅ 自定义滚动条 - 青绿色样式
- ✅ 选中文字高亮 - 半透明青绿背景
- ✅ 音乐符号光标轨迹动画 (cursor-trail)
- ✅ 暗色模式支持

**配色方案**:
```css
主色: #00C2D1 (初音青绿)
辅助色: #0A84FF (科技蓝)
深色: #00A8B5 (深青绿)
浅色高亮: #7EE8D5 (浅青绿)
```

---

### 2. 主题配置
**路径**: `themes/simple/config.js`

**配置项**:
- SIMPLE_LOGO_IMG: Logo 图片路径
- SIMPLE_TOP_BAR: 是否显示顶部提示栏
- SIMPLE_TOP_BAR_CONTENT: 顶部提示内容
- SIMPLE_LOGO_DESCRIPTION: Logo 下方的描述文字
- SIMPLE_AUTHOR_LINK: 作者链接
- SIMPLE_POST_AD_ENABLE: 文章列表广告开关
- SIMPLE_POST_COVER_ENABLE: 博客封面显示开关
- SIMPLE_ARTICLE_RECOMMEND_POSTS: 推荐文章显示
- SIMPLE_MENU_*: 菜单配置（分类、标签、归档、搜索）

---

### 3. 主配置文件
**路径**: `blog.config.js`

**关键配置**:
```javascript
THEME: 'miku',  // 使用 miku 主题
LANG: 'zh-CN',  // 中文
APPEARANCE: 'light',  // 日间模式（支持 dark/auto）
```

---

### 4. 组件文件（部分已修改）

根据 git log 提交记录，以下组件已完成玻璃拟态 (glass-morphism) 改造：

- ✅ **SocialButton.js** - 社交按钮玻璃效果
- ✅ **ArticleLock.js** - 文章锁定组件
- ✅ **BlogArchiveItem.js** - 归档列表项
- ✅ **BlogListPage.js** - 分页博客列表
- ✅ **BlogListScroll.js** - 滚动加载博客列表
- ✅ **Pagination** - 分页组件
- ✅ **Announcement** - 公告组件（已移除原有横幅）

---

## 🎨 视觉效果特性

### 1. 玻璃卡片 (Glass Card)
```css
glass-card: 
  - 背景: rgba(255, 255, 255, 0.98)
  - 圆角: 16px
  - 阴影: 多层 MD3 阴影系统
  - 过渡: cubic-bezier(0.4, 0, 0.2, 1)

hover:
  - Y轴上浮: translateY(-1px)
  - 阴影加深
```

### 2. 浮动卡片 (Elevated Card)
```css
elevated-card:
  - 背景: 纯白带青绿色边框
  - 圆角: 20px
  - 阴影: 带青绿色光晕的多层阴影
  - 边框: 1px solid rgba(0, 194, 209, 0.06)

hover:
  - Y轴上浮: translateY(-2px)
  - 光晕增强
```

### 3. FAB 按钮
- 圆形设计，渐变背景 (#00C2D1 → #0A84FF)
- 阴影带有青绿色光晕
- 悬停时放大 + 阴影扩散

### 4. 背景系统
- 固定全屏背景: `/miku.jpg`
- 日间模式: 白色半透明遮罩 (rgba(255,255,255,0.1))
- 夜间模式: 黑色半透明遮罩 (rgba(0,0,0,0.4))

### 5. 动画效果
- **页面过渡**: 卡片依次淡入
- **悬停效果**: 上浮 + 阴影扩散 (0.2s ease)
- **光标轨迹**: 音乐符号跟随光标飘动
- **按钮交互**: 缩放 + 颜色渐变

---

## 🌙 暗色模式支持

暗色模式下自动切换：
- 卡片背景: `rgba(40, 40, 40, 0.98)`
- 文字颜色: 自动适配
- 链接颜色: 保持青绿色
- 阴影颜色: 调整为深色主题

---

## 📱 响应式设计

- 移动端内边距: 10px
- 桌面端内边距: 20px
- 卡片在小屏幕下自动调整

---

## 🚀 后续优化建议

### 已完成
- [x] 基础玻璃拟态样式
- [x] MD3 阴影系统
- [x] 青绿色主题配色
- [x] 全屏 Miku 背景
- [x] 暗色模式支持
- [x] 光标轨迹动画

### 待完成
- [ ] 极光渐变动态背景 (Aurora Gradient)
- [ ] 页面加载骨架屏 (Shimmer Loading)
- [ ] 文章阅读进度条
- [ ] 打字机标题效果
- [ ] 视差滚动背景
- [ ] 菜单下划线动画优化

---

## 📦 部署说明

### 本地开发
```bash
npm install
npm run dev
# 默认端口 3001
```

### 部署到 Vercel
1. 提交代码到 GitHub
2. Vercel 自动部署
3. 配置环境变量 NOTION_PAGE_ID

---

## 🔧 技术栈

- **Framework**: Next.js 14
- **Language**: React + JavaScript
- **Styling**: Tailwind CSS + CSS-in-JS (styled-jsx)
- **CMS**: Notion API
- **Hosting**: Vercel

---

## 📝 备注

- 原有文章数据保留在 Notion 中，前端样式重新设计
- 可在 Notion 中重新编辑发布文章
- 图片资源存放于 `/public/` 目录
- 建议使用高质量的 Miku 壁纸以获得最佳视觉效果

---

**最后修改时间**: 2025-04-14  
**主题版本**: Miku Simple Tech v1.0  
**作者**: 基于 NotionNext 二次开发
