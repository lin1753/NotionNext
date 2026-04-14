/* eslint-disable react/no-unknown-property */
/**
 * Miku Simple Tech Theme
 */
const Style = () => {
  return <style jsx global>{`
    /* MD3 Elevation System */
    .glass-card {
      background: rgba(255, 255, 255, 0.98);
      border-radius: 16px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.02), 0 4px 8px rgba(0, 0, 0, 0.02);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .glass-card:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.03), 0 8px 16px rgba(0, 0, 0, 0.03);
      transform: translateY(-1px);
    }

    .dark .glass-card {
      background: rgba(40, 40, 40, 0.98);
    }

    /* Elevated Card */
    .elevated-card {
      background: rgba(255, 255, 255, 0.98);
      border-radius: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 194, 209, 0.08), 0 8px 24px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(0, 194, 209, 0.06);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .elevated-card:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 194, 209, 0.12), 0 16px 32px rgba(0, 0, 0, 0.06);
      transform: translateY(-2px);
    }

    /* FAB Button */
    .fab-button {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 194, 209, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .fab-button:hover {
      box-shadow: 0 4px 8px rgba(0, 194, 209, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2);
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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333333;
    }

    /* Background */
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('/miku.jpg') no-repeat center center/cover;
      z-index: -2;
    }

    body::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
      z-index: -1;
    }

    .dark body::after {
      background: rgba(0, 0, 0, 0.4);
    }

    #theme-simple {
      min-height: 100vh;
      padding: 20px;
    }

    @media (max-width: 768px) {
      #theme-simple { padding: 10px; }
    }

    /* Article cards */
    #theme-simple article.elevated-card {
      background: rgba(255, 255, 255, 0.98);
      border-radius: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 194, 209, 0.08), 0 8px 24px rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(0, 194, 209, 0.06);
      padding: 30px;
      margin-bottom: 30px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    #theme-simple article.elevated-card:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 8px 20px rgba(0, 194, 209, 0.12), 0 16px 32px rgba(0, 0, 0, 0.06);
      transform: translateY(-2px);
    }

    .dark #theme-simple article.elevated-card {
      background: rgba(40, 40, 40, 0.98);
    }

    /* Navigation */
    #theme-simple .menu-link {
      color: #333333;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      padding: 8px 16px;
      border-radius: 20px;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.9);
    }

    #theme-simple .menu-link:hover {
      background: rgba(255, 255, 255, 1);
      color: #00C2D1;
      transform: translateY(-2px);
    }

    .dark #theme-simple .menu-link {
      background: rgba(50, 50, 50, 0.9);
      color: #ffffff;
    }

    /* Buttons */
    #theme-simple button,
    #theme-simple .btn {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 12px 30px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    #theme-simple button:hover,
    #theme-simple .btn:hover {
      background: linear-gradient(135deg, #00A8B5, #0066CC);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 194, 209, 0.3);
    }

    /* Tags */
    #theme-simple .tag {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #f1f1f1; }
    ::-webkit-scrollbar-thumb {
      background: #00C2D1;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover { background: #00A8B5; }

    /* Back to top */
    #theme-simple .jump-to-top {
      background: linear-gradient(135deg, #00C2D1, #0A84FF);
      color: white;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 194, 209, 0.3);
      transition: all 0.3s ease;
    }

    #theme-simple .jump-to-top:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0, 194, 209, 0.4);
    }

    /* Selection */
    ::selection {
      background: rgba(0, 194, 209, 0.3);
      color: inherit;
    }

    /* Links */
    #theme-simple a {
      color: #0A84FF;
      transition: color 0.3s ease;
      text-decoration: none;
    }

    #theme-simple a:hover { color: #00C2D1; }

    /* Notion quote */
    .notion-quote {
      border-left: 4px solid #00C2D1;
      background: rgba(0, 194, 209, 0.08);
      border-radius: 0 8px 8px 0;
    }

    @media (max-width: 768px) {
      #theme-simple article { padding: 20px; }
    }

    /* Cursor trail */
    .cursor-trail {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
    }

    .cursor-note {
      position: absolute;
      width: 8px;
      height: 8px;
      background: linear-gradient(135deg, #00C2D1, #7EE8D5);
      border-radius: 50%;
      animation: note-float 1s ease-out forwards;
      box-shadow: 0 0 10px rgba(0, 194, 209, 0.8);
    }

    @keyframes note-float {
      0% { opacity: 1; transform: translateY(0) scale(1); }
      100% { opacity: 0; transform: translateY(-30px) scale(0.5); }
    }
  `}</style>
}

export { Style }
