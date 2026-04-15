/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  // 从配置中获取主题色，如果没有配置则使用默认�?#928CEE
  const themeColor = siteConfig('MIKU_THEME_COLOR', '#928CEE', CONFIG)

  return (
    <style jsx global>{`
      :root {
        --theme-color: ${themeColor};
      }

      /* 基础重置，使得背景真正透明以透出桌面背景 */
      html, body {
        background-color: transparent !important;
        margin: 0;
        padding: 0;
      }

      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: url('/miku.jpg') no-repeat center center;
        background-size: cover;
        z-index: -2;
      }

      body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.15);
        z-index: -1;
        pointer-events: none;
      }

      .dark body::after {
        background: rgba(0, 0, 0, 0.5);
      }

      #theme-MIKU body {
        background-color: transparent !important;
      }
      .dark #theme-MIKU body {
        background-color: transparent !important;
      }

      /* 毛玻璃特效 */
      .elevated-card {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: saturate(150%) blur(30px);
        -webkit-backdrop-filter: saturate(150%) blur(30px);
        border-radius: 20px;
        box-shadow: 0 8px 32px rgba(0, 194, 209, 0.1), 0 4px 12px rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .elevated-card:hover {
        box-shadow: 0 12px 48px rgba(0, 194, 209, 0.2), 0 8px 16px rgba(0, 0, 0, 0.06);
        transform: translateY(-2px);
      }

      .dark .elevated-card {
        background: rgba(40, 40, 40, 0.85);
        border: 1px solid rgba(255, 255, 255, 0.15);
      }

      /* 针对Miku鼠标拖拽动画的样式 */
      .miku-note {
        position: fixed;
        pointer-events: none;
        font-size: 20px;
        color: #00bcd4;
        animation: note-anim 1.5s ease-out forwards;
        z-index: 9999;
      }

      @keyframes note-anim {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateY(-50px) scale(0.5);
        }
      }

      /*  菜单下划线动�?*/
      #theme-MIKU .menu-link {
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

      #theme-MIKU .menu-link:hover {
        background-size: 100% 2px;
        color: var(--theme-color);
      }

      /* 文章列表中标题行悬浮时的文字颜色 */
      #theme-MIKU h2:hover .menu-link {
        color: var(--theme-color) !important;
      }
      .dark #theme-MIKU h2:hover .menu-link {
        color: var(--theme-color) !important;
      }

      /* 下拉菜单悬浮背景�?*/
      #theme-MIKU li[class*='hover:bg-indigo-500']:hover {
        background-color: var(--theme-color) !important;
      }

      /* tag标签悬浮背景�?*/
      #theme-MIKU a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
      }

      /* 社交按钮悬浮颜色 */
      #theme-MIKU i[class*='hover:text-indigo-600']:hover {
        color: var(--theme-color) !important;
      }
      .dark #theme-MIKU i[class*='dark:hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* MenuGroup 悬浮颜色 */
      #theme-MIKU #nav div[class*='hover:text-indigo-600']:hover {
        color: var(--theme-color) !important;
      }
      .dark #theme-MIKU #nav div[class*='dark:hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* 最新发布文章悬浮颜�?*/
      #theme-MIKU div[class*='hover:text-indigo-600']:hover,
      #theme-MIKU div[class*='hover:text-indigo-400']:hover {
        color: var(--theme-color) !important;
      }

      /* 分页组件颜色 */
      #theme-MIKU .text-indigo-400 {
        color: var(--theme-color) !important;
      }
      #theme-MIKU .border-indigo-400 {
        border-color: var(--theme-color) !important;
      }
      #theme-MIKU a[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }
      /* 移动设备下，搜索组件中选中分类的高亮背景色 */
      #theme-MIKU div[class*='hover:bg-indigo-400']:hover {
        background-color: var(--theme-color) !important;
      }
      #theme-MIKU .hover\:bg-indigo-400:hover {
        background-color: var(--theme-color) !important;
      }
      #theme-MIKU .bg-indigo-400 {
        background-color: var(--theme-color) !important;
      }
      #theme-MIKU a[class*='hover:bg-indigo-600']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }

      /* 右下角悬浮按钮背景色 */
      #theme-MIKU .bg-indigo-500 {
        background-color: var(--theme-color) !important;
      }
      .dark #theme-MIKU .dark\:bg-indigo-500 {
        background-color: var(--theme-color) !important;
      }

      // 移动设备菜单栏选中背景�?      #theme-MIKU div[class*='hover:bg-indigo-500']:hover {
        background-color: var(--theme-color) !important;
      }

      /* 文章浏览进度条颜�?*/
      #theme-MIKU .bg-indigo-600 {
        background-color: var(--theme-color) !important;
      }
      /* 当前浏览位置标题高亮颜色 */
      #theme-MIKU .border-indigo-800 {
        border-color: var(--theme-color) !important;
      }
      #theme-MIKU .text-indigo-800 {
        color: var(--theme-color) !important;
      }
      .dark #theme-MIKU .dark\:text-indigo-400 {
        color: var(--theme-color) !important;
      }
      .dark #theme-MIKU .dark\:border-indigo-400 {
        border-color: var(--theme-color) !important;
      }
      .dark #theme-MIKU .dark\:border-white {
        border-color: var(--theme-color) !important;
      }
      /* 目录项悬浮时的字体颜�?*/
      #theme-MIKU a[class*='hover:text-indigo-800']:hover {
        color: var(--theme-color) !important;
      }
      /* 深色模式下目录项的默认文字颜色和边框线颜�?*/
      .dark #theme-MIKU .catalog-item {
        color: white !important;
        border-color: white !important;
      }
      .dark #theme-MIKU .catalog-item:hover {
        color: var(--theme-color) !important;
      }
      /* 深色模式下当前高亮标题的边框线颜�?*/
      .dark #theme-MIKU .catalog-item.font-bold {
        border-color: var(--theme-color) !important;
      }

      /* 文章底部版权声明组件左侧边框线颜�?*/
      #theme-MIKU .border-indigo-500 {
        border-color: var(--theme-color) !important;
      }

      /* 归档页面文章列表项悬浮时左侧边框线颜�?*/
      #theme-MIKU li[class*='hover:border-indigo-500']:hover {
        border-color: var(--theme-color) !important;
      }

      /* 自定义右键菜单悬浮高亮颜�?*/
      #theme-MIKU .hover\:bg-blue-600:hover {
        background-color: var(--theme-color) !important;
      }
      .dark #theme-MIKU li[class*='dark:hover:border-indigo-300']:hover {
        border-color: var(--theme-color) !important;
      }
      /* 深色模式下，归档页面文章列表项默认状态左侧边框线颜色 */
      .dark #theme-MIKU li[class*='dark:border-indigo-400'] {
        border-color: var(--theme-color) !important;
      }
      /* 深色模式下，归档页面文章标题悬浮时的文字颜色 */
      .dark #theme-MIKU a[class*='dark:hover:text-indigo-300']:hover {
        color: var(--theme-color) !important;
      }

      /* 设置了从上到下的渐变黑色 */
      #theme-MIKU .header-cover::before {
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
    `}</style>
  )
}

export { Style }

