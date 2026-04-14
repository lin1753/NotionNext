import SmartLink from '@/components/SmartLink'

/**
 * 归档分组文章
 * @param {*} param0
 * @returns
 */
export default function BlogArchiveItem({ archiveTitle, archivePosts }) {
  return (
    <div key={archiveTitle} className="glass-card p-6 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 mb-8">
      <div id={archiveTitle} className='pb-4 text-2xl font-bold text-cyan-600 dark:text-cyan-400 border-b border-cyan-500/20 mb-4'>
        <i className='far fa-calendar-alt mr-2'></i>
        {archiveTitle}
      </div>

      <ul className='space-y-2'>
        {archivePosts[archiveTitle].map(post => {
          return (
            <li
              key={post.id}
              className='p-2 text-xs md:text-base items-center hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 rounded-xl transition-all duration-300 group'>
              <div id={post?.publishDay} className='flex items-center'>
                <span className='text-gray-500 dark:text-gray-400 w-24 flex-shrink-0'>
                  <i className='far fa-clock mr-1 text-cyan-500/60'></i>
                  {post.date?.start_date}
                </span>
                <SmartLink
                  href={post?.href}
                  passHref
                  className='dark:text-gray-300 overflow-x-hidden hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer text-gray-700 transition-colors duration-200'>
                  {post.title}
                </SmartLink>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
