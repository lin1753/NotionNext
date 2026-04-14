import { useGlobal } from '@/lib/global'

/**
 * 文章列表上方嵌入
 * @param {*} props
 * @returns
 */
export default function BlogPostBar(props) {
  const { tag, category } = props
  const { locale } = useGlobal()

  if (tag) {
    return (
      <div className='flex items-center text-xl py-2 glass-card px-4 rounded-xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 mb-4'>
        <i className='mr-2 fas fa-tag text-cyan-500' />
        <span className='text-gray-700 dark:text-gray-300'>{locale.COMMON.TAGS}: </span>
        <span className='ml-2 font-semibold text-cyan-600 dark:text-cyan-400'>{tag}</span>
      </div>
    )
  } else if (category) {
    return (
      <div className='flex items-center text-xl py-2 glass-card px-4 rounded-xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 mb-4'>
        <i className='mr-2 fas fa-th text-cyan-500' />
        <span className='text-gray-700 dark:text-gray-300'>{locale.COMMON.CATEGORY}: </span>
        <span className='ml-2 font-semibold text-cyan-600 dark:text-cyan-400'>{category}</span>
      </div>
    )
  } else {
    return <></>
  }
}
