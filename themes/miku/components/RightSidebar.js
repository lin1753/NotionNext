import { useMikuGlobal } from '../index'

const RightSidebar = () => {
  const { stats } = useMikuGlobal()

  // Ensure default stats object exists if not loaded yet
  const rhythmStats = stats || { PERFECT: 0, GREAT: 0, MIKU: 0, FEVER: 0, TOTAL: 0 }

  return (
    <aside className='w-full lg:w-80 flex flex-col space-y-6 pt-6 lg:pt-0 shrink-0 hidden lg:flex'>
      {/* 像素初音容器 */}
      <div className='glass-card flex flex-col items-center justify-center p-6 duration-300'>
        <div className='w-32 h-32 rounded-xl overflow-hidden mb-4 bg-white/50 border border-white/40 flex items-center justify-center shadow-inner'>
          <img
            src='https://media.tenor.com/Nl25UjSCLP0AAAAi/miku-hatsune-miku.gif'
            alt='Pixel Miku'
            className='w-full h-full object-cover custom-pixel-rendering'
            style={{ imageRendering: 'pixelated' }}
            title='Pixel Miku is watching you!'
          />
        </div>
        <h3 className='font-bold text-gray-800 dark:text-gray-200 text-lg mb-1 tracking-wider'>初音ミク V4X</h3>
        <p className='text-xs text-miku-primary font-semibold px-3 py-1 bg-miku-primary/10 rounded-full border border-miku-primary/20'>
          Live2D Emulator (Pixel)
        </p>
      </div>

      {/* 音游结算面板 */}
      <div className='glass-card p-6 duration-300 relative overflow-hidden'>
        {/* 背景装饰 */}
        <div className='absolute -right-4 -top-4 w-24 h-24 bg-miku-secondary/10 rounded-full blur-2xl pointer-events-none'></div>
        
        <h3 className='font-bold text-xl text-gray-800 dark:text-white mb-6 flex items-center'>
          <i className="fas fa-gamepad mr-2 text-miku-primary"></i>
          Rhythm Stats
        </h3>
        
        <div className='flex flex-col space-y-4'>
          {/* TOTAL */}
          <div className='flex justify-between items-center group'>
            <span className='font-bold text-sm tracking-widest text-gray-500 group-hover:text-miku-primary transition-colors'>TOTAL HITS</span>
            <span className='font-black text-xl text-gray-800 dark:text-white drop-shadow-sm'>{rhythmStats.TOTAL}</span>
          </div>
          
          <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-1'></div>

          {/* MIKU */}
          <div className='flex justify-between items-center group'>
            <span className='font-bold text-sm text-[#39C5BB] brightness-125 drop-shadow-[0_0_2px_rgba(57,197,187,0.8)]'>MIKU</span>
            <span className='font-black text-lg text-gray-800 dark:text-white'>{rhythmStats.MIKU}</span>
          </div>

          {/* FEVER */}
          <div className='flex justify-between items-center group'>
            <span className='font-bold text-sm text-[#FF1493] brightness-125 drop-shadow-[0_0_2px_rgba(255,20,147,0.8)]'>FEVER!</span>
            <span className='font-black text-lg text-gray-800 dark:text-white'>{rhythmStats.FEVER}</span>
          </div>

          {/* PERFECT */}
          <div className='flex justify-between items-center group'>
            <span className='font-bold text-sm text-[#FFD700] brightness-110 drop-shadow-[0_0_2px_rgba(255,215,0,0.8)]'>PERFECT</span>
            <span className='font-black text-lg text-gray-800 dark:text-white'>{rhythmStats.PERFECT}</span>
          </div>

          {/* GREAT */}
          <div className='flex justify-between items-center group'>
            <span className='font-bold text-sm text-[#00FA9A] brightness-110 drop-shadow-[0_0_2px_rgba(0,250,154,0.6)]'>GREAT</span>
            <span className='font-black text-lg text-gray-800 dark:text-white'>{rhythmStats.GREAT}</span>
          </div>
        </div>

        {/* 提示条 */}
        <div className='mt-6 text-center text-[10px] text-gray-400 font-medium'>
          <p>Click anywhere to gain combos!</p>
          <p>Data stored locally in your browser.</p>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
