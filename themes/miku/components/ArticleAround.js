import SmartLink from '@/components/SmartLink'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAround({ prev, next }) {
  if (!prev || !next) {
    return <></>
  }
  return (
    <section className='text-gray-800 dark:text-gray-400 h-12 flex items-center justify-between space-x-5 my-4'>
      {prev && <SmartLink
        href={`/${prev.slug}`}
        passHref
        className='text-sm cursor-pointer justify-start items-center flex hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 glass-card px-3 py-2 rounded-xl bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:border-cyan-400/50'>

        <i className='mr-1 fas fa-angle-double-left text-cyan-500' />{prev.title}

      </SmartLink>}
      {next && <SmartLink
        href={`/${next.slug}`}
        passHref
        className='text-sm cursor-pointer justify-end items-center flex hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 glass-card px-3 py-2 rounded-xl bg-white/70 dark:bg-black/50 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:border-cyan-400/50'>
        {next.title}
        <i className='ml-1 my-1 fas fa-angle-double-right text-cyan-500' />

      </SmartLink>}
    </section>
  )
}
