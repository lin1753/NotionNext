/* eslint-disable react/no-unknown-property */
/**
 * Miku Simple Tech Theme
 */
const Style = () => {
  return <style jsx global>{`
    /* MD3 Elevation System */
    .glass-card {
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.4);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .glass-card:hover {
      box-shadow: 0 8px 32px rgba(0, 194, 209, 0.15), 0 4px 8px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
    }

    .dark .glass-card {
      background: rgba(28, 28, 30, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.05) inset;
    }

    /* Elevated Card */
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

    /* FAB Button */
    .fab-button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 194, 209, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .fab-button:hover {
      box-shadow: 0 8px 25px rgba(0, 194, 209, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.3) inset;
      transform: scale(1.05) translateY(-2px);
    }

    /* Chip styles */
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .chip-filled {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
    }

    .chip-tonal {
      background: rgba(0, 194, 209, 0.12);
      color: #00A8B5;
      border: 1px solid rgba(0, 194, 209, 0.2);
    }

    .chip-tonal:hover {
      background: rgba(0, 194, 209, 0.18);
      box-shadow: 0 2px 6px rgba(0, 194, 209, 0.15);
    }

    /* Basic styles */
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #333333;
    }

    /* Background - Full screen wallpaper */
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

    #theme-miku {
      min-height: 100vh;
      padding: 20px;
    }

    @media (max-width: 768px) {
      #theme-miku { padding: 10px; }
    }

    /* Article cards */
    #theme-miku article.elevated-card {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: saturate(150%) blur(30px);
      -webkit-backdrop-filter: saturate(150%) blur(30px);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 194, 209, 0.1), 0 4px 12px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 30px;
      margin-bottom: 30px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    #theme-miku article.elevated-card:hover {
      box-shadow: 0 12px 48px rgba(0, 194, 209, 0.2), 0 8px 16px rgba(0, 0, 0, 0.06);
      transform: translateY(-2px);
    }

    .dark #theme-miku article.elevated-card {
      background: rgba(40, 40, 40, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    /* Navigation */
    #theme-miku .menu-link {
      color: #333333;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      padding: 8px 16px;
      border-radius: 20px;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: saturate(180%) blur(10px);
      -webkit-backdrop-filter: saturate(180%) blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    #theme-miku .menu-link:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #00C2D1;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 194, 209, 0.2);
    }

    .dark #theme-miku .menu-link {
      background: rgba(50, 50, 50, 0.75);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Buttons */
    #theme-miku button,
    #theme-miku .btn {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 12px 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 194, 209, 0.3);
    }

    #theme-miku button:hover,
    #theme-miku .btn:hover {
      background: linear-gradient(135deg, #00A8B5, #0066CC);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 194, 209, 0.4);
    }

    /* Tags */
    #theme-miku .tag {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: rgba(241, 241, 241, 0.5); }
    ::-webkit-scrollbar-thumb {
      background: #00C2D1;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover { background: #00A8B5; }

    /* Back to top */
    #theme-miku .jump-to-top {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 194, 209, 0.4);
      transition: all 0.3s ease;
    }

    #theme-miku .jump-to-top:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 194, 209, 0.5);
    }

    /* Selection */
    ::selection {
      background: rgba(0, 194, 209, 0.3);
      color: inherit;
    }

    /* Links */
    #theme-miku a {
      color: #0A84FF;
      transition: color 0.3s ease;
      text-decoration: none;
    }

    #theme-miku a:hover { color: #00C2D1; }

    /* Notion quote */
    .notion-quote {
      border-left: 4px solid #00C2D1;
      background: rgba(0, 194, 209, 0.08);
      border-radius: 0 8px 8px 0;
    }

    @media (max-width: 768px) {
      #theme-miku article { padding: 20px; }
    }
  `}</style>
}

export { Style }
