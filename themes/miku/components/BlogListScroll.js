import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import throttle from 'lodash.throttle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BlogItem } from './BlogItem'

/**
 * 滚动博客列表
 * @param {*} props
 * @returns
 */
export default function BlogListScroll(props) {
  const { posts } = props
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  let hasMore = false
  const postsToShow = posts
    ? Object.assign(posts).slice(0, POSTS_PER_PAGE * page)
    : []

  if (posts) {
    const totalCount = posts.length
    hasMore = page * POSTS_PER_PAGE < totalCount
  }
  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  const targetRef = useRef(null)

  // 监听滚动自动分页加载
  const scrollTrigger = useCallback(
    throttle(() => {
      const scrollS = window.scrollY + window.outerHeight
      const clientHeight = targetRef
        ? targetRef.current
          ? targetRef.current.clientHeight
          : 0
        : 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    }, 500)
  )

  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)

    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  return (
    <div id='posts-wrapper' className='w-full md:pr-8 mb-12' ref={targetRef}>
      {postsToShow.map(p => (
        <BlogItem key={p.id} post={p} />
      ))}

      <div
        onClick={handleGetMore}
        className={`w-full my-4 py-4 text-center cursor-pointer glass-card rounded-xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 transition-all duration-300 hover:border-cyan-400/50 ${hasMore ? 'hover:shadow-lg hover:shadow-cyan-500/10' : ''}`}>
        {' '}
        <span className={`${hasMore ? 'text-cyan-600 dark:text-cyan-400' : 'text-gray-500'}`}>
          {hasMore ? (
            <>
              <i className='fas fa-chevron-down mr-2 animate-bounce'></i>
              {locale.COMMON.MORE}
            </>
          ) : (
            <>
              <i className='fas fa-check-circle mr-2'></i>
              {locale.COMMON.NO_MORE}
            </>
          )}
        </span>
      </div>
    </div>
  )
}
