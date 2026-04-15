import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'

/**
 * 跳转到网页顶�? * 当屏幕下�?00像素后会出现该控�? * @param targetRef 关联高度的目标html标签
 * @param showPercent 是否显示百分�? * @returns {JSX.Element}
 * @constructor
 */
const ButtonJumpToTop = ({ showPercent = true, percent }) => {
  const { locale } = useGlobal()

  if (!siteConfig('MIKU_WIDGET_TO_TOP', null, CONFIG)) {
    return <></>
  }
  return (<div className='space-x-1 items-center justify-center transform hover:scale-105 duration-200 w-7 h-auto pb-1 text-center' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
        <div title={locale.POST.TOP} ><i className='fas fa-arrow-up text-xs' /></div>
        {showPercent && (<div className='text-xs hidden lg:block'>{percent}</div>)}
    </div>)
}

export default ButtonJumpToTop

