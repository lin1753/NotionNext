import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 网站顶部 提示栏
 * @returns
 */
export default function TopBar(props) {
  const content = siteConfig('MIKU_TOP_BAR_CONTENT', null, CONFIG)

  if (content) {
    return (
      <header className="flex justify-center items-center bg-gradient-to-r from-cyan-500/80 to-blue-500/80 dark:from-cyan-600/80 dark:to-blue-600/80 backdrop-blur-md">
        <div id='top-bar-inner' className='max-w-9/10 w-full z-20'>
          <div className='text-xs text-center float-left text-white z-50 leading-5 py-2.5 animate-pulse' dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
      </header>
    )
  }
  return <></>
}
