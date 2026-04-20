/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  // 从配置中获取主题色，如果没有配置则使用默认值 #39C5BB
  const themeColor = siteConfig('HEXO_THEME_COLOR', '#39C5BB', CONFIG)

  return (
    <style jsx global>{`
      :root {
        --theme-color: ${themeColor};
      }

      // 底色
      #theme-miku body {
        background-color: #f5f5f5;
      }
      .dark #theme-miku body {
        background-color: black;
      }

      /*  菜单下划线动画 */
      #theme-miku .menu-link {
        text-decoration: none;
        background-image: linear-gradient(
          var(--theme-color),
          var(--theme-color)
        );
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
      }

      #theme-miku .menu-link:hover {
        background-size: 100% 2px;
        color: var(--theme-color);
      }

      /* 文章列表中标题行悬浮时的文字颜色 */
      #theme-miku h2:hover .menu-link {
        color: var(--theme-color) !important;
      }
      .dark #theme-miku h2:hover .menu-link {
        color: var(--theme-color) !important;
      }

      /* 下拉菜单悬浮背景色 */
      #theme-miku li[class*='hover:bg-indigo-500']:hover {
        background-color: var(--theme-color) !important;
      }

      /* tag标签悬浮背景色 */
      #theme-miku a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
      }

      /* 社交按钮悬浮颜色 */
      #theme-miku i[class*='hover:text-indigo-600']:hover {
        color: var(--theme-color) !important;
      }
      .dark #theme-miku i[class*='dark:hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* MenuGroup 悬浮颜色 */
      #theme-miku #nav div[class*='hover:text-indigo-600']:hover {
        color: var(--theme-color) !important;
      }
      .dark #theme-miku #nav div[class*='dark:hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* 最新发布文章悬浮颜色 */
      #theme-miku div[class*='hover:text-indigo-600']:hover,
      #theme-miku div[class*='hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* 分页组件颜色 */
      #theme-miku .text-indigo-400 {
        color: var(--theme-color) !important;
      }
      #theme-miku .border-indigo-400 {
        border-color: var(--theme-color) !important;
      }
      #theme-miku a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }
      /* 移动设备下，搜索组件中选中分类的高亮背景色 */
      #theme-miku div[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
      }
      #theme-miku .hover\:bg-indigo-400:hover {
        background-color: var(--theme-color) !important;
      }
      #theme-miku .bg-indigo-400 {
        background-color: var(--theme-color) !important;
      }
      #theme-miku a[class*='hover:bg-indigo-600']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }

      /* 右下角悬浮按钮背景色 */
      #theme-miku .bg-indigo-500 {
        background-color: var(--theme-color) !important;
      }
      .dark #theme-miku .dark\:bg-indigo-500 {
        background-color: var(--theme-color) !important;
      }

      // 移动设备菜单栏选中背景色
      #theme-miku div[class*='hover:bg-indigo-500']:hover {
        background-color: var(--theme-color) !important;
      }

      /* 文章浏览进度条颜色 */
      #theme-miku .bg-indigo-600 {
        background-color: var(--theme-color) !important;
      }
      /* 当前浏览位置标题高亮颜色 */
      #theme-miku .border-indigo-800 {
        border-color: var(--theme-color) !important;
      }
      #theme-miku .text-indigo-800 {
        color: var(--theme-color) !important;
      }
      .dark #theme-miku .dark\:text-indigo-400 {
        color: var(--theme-color) !important;
      }
      .dark #theme-miku .dark\:border-indigo-400 {
        border-color: var(--theme-color) !important;
      }
      .dark #theme-miku .dark\:border-white {
        border-color: var(--theme-color) !important;
      }
      /* 目录项悬浮时的字体颜色 */
      #theme-miku a[class*='hover:text-indigo-800']:hover {
        color: var(--theme-color) !important;
      }
      /* 深色模式下目录项的默认文字颜色和边框线颜色 */
      .dark #theme-miku .catalog-item {
        color: white !important;
        border-color: white !important;
      }
      .dark #theme-miku .catalog-item:hover {
        color: var(--theme-color) !important;
      }
      /* 深色模式下当前高亮标题的边框线颜色 */
      .dark #theme-miku .catalog-item.font-bold {
        border-color: var(--theme-color) !important;
      }

      /* 文章底部版权声明组件左侧边框线颜色 */
      #theme-miku .border-indigo-500 {
        border-color: var(--theme-color) !important;
      }

      /* 归档页面文章列表项悬浮时左侧边框线颜色 */
      #theme-miku li[class*='hover:border-indigo-500']:hover {
        border-color: var(--theme-color) !important;
      }

      /* 自定义右键菜单悬浮高亮颜色 */
      #theme-miku .hover\:bg-blue-600:hover {
        background-color: var(--theme-color) !important;
      }
      .dark #theme-miku li[class*='dark:hover:border-indigo-300']:hover {
        border-color: var(--theme-color) !important;
      }
      /* 深色模式下，归档页面文章列表项默认状态左侧边框线颜色 */
      .dark #theme-miku li[class*='dark:border-indigo-400'] {
        border-color: var(--theme-color) !important;
      }
      /* 深色模式下，归档页面文章标题悬浮时的文字颜色 */
      .dark #theme-miku a[class*='dark:hover:text-indigo-300']:hover {
        color: var(--theme-color) !important;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-miku .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.2) 10%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0.2) 75%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      /* Custem */
      .tk-footer {
        opacity: 0;
      }

      // 选中字体颜色
      ::selection {
        background: color-mix(in srgb, var(--theme-color) 30%, transparent);
      }

      // 自定义滚动条
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      ::-webkit-scrollbar-track {
        background: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: var(--theme-color);
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: var(--theme-color) transparent;
      }

      .miku-note { pointer-events: none; position: fixed; font-size: 24px; z-index: 9999; animation: floatUp 1s ease-out forwards; }
      @keyframes floatUp { 0% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-50px) scale(1.5); } }

      /* ===== Material Design 3 风格卡片 (Glass Material) ===== */
      .glass-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 248, 255, 0.65)) !important;
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.8) !important;
        box-shadow:
            0 6px 16px rgba(0, 0, 0, 0.06),
            0 2px 4px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 1),
            inset 1px 0 0 rgba(255, 255, 255, 0.8);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .glass-card:hover {
        box-shadow:
            0 15px 30px rgba(0, 194, 209, 0.1),
            0 8px 15px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        transform: translateY(-4px);
        border: 1px solid rgba(0, 194, 209, 0.3) !important;
        background: linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(240, 250, 255, 0.85)) !important;
      }
      .dark .glass-card {
        background: linear-gradient(135deg, rgba(30, 30, 30, 0.8), rgba(20, 20, 20, 0.6)) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
      }

      /* ===== 高亮卡片（文章卡片）- MD3 Elevated Card ===== */
      .elevated-card {
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 245, 250, 0.7)) !important;
        backdrop-filter: blur(24px) saturate(180%);
        -webkit-backdrop-filter: blur(24px) saturate(180%);
        border-radius: 20px;
        border-top: 1px solid rgba(255, 255, 255, 1) !important;
        border-left: 1px solid rgba(255, 255, 255, 1) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4) !important;
        border-right: 1px solid rgba(255, 255, 255, 0.4) !important;
        box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.08),
            0 4px 10px rgba(0, 194, 209, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .elevated-card:hover {
        box-shadow:
            0 20px 40px rgba(0, 194, 209, 0.15),
            0 8px 20px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        transform: translateY(-6px);
        border-color: rgba(0, 194, 209, 0.5) !important;
        background: linear-gradient(145deg, rgba(255, 255, 255, 1), rgba(235, 252, 255, 0.9)) !important;
      }
      .dark .elevated-card {
        background: linear-gradient(145deg, rgba(40, 40, 40, 0.8), rgba(25, 25, 25, 0.6)) !important;
        border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-left: 1px solid rgba(255, 255, 255, 0.1) !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.8) !important;
        border-right: 1px solid rgba(0, 0, 0, 0.8) !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
      }
      .dark .elevated-card:hover {
        border-color: rgba(0, 194, 209, 0.5) !important;
        background: linear-gradient(145deg, rgba(50, 50, 50, 0.8), rgba(30, 30, 30, 0.7)) !important;
      }
    `}</style>
  )
}

export { Style }