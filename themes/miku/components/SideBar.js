import { AdSlot } from '@/components/GoogleAdsense'
import Live2D from '@/components/Live2D'
import Catalog from './Catalog'
import WWAds from '@/components/WWAds'

/**
 * 侧边栏
 * @param {*} props
 * @returns
 */
export default function SideBar(props) {
  return (
    <div className='space-y-6'>
      <Catalog {...props} />

      <div className='glass-card p-4 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10'>
        <Live2D />
      </div>

      <div className='glass-card p-4 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10'>
        <AdSlot />
      </div>

      <div className='glass-card p-4 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10'>
        <WWAds orientation="vertical" className="w-full" />
      </div>
    </div>
  )
}
