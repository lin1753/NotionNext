import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import NotionPage from '@/components/NotionPage'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'

export const BlogItem = props => {
  const { post } = props
  const { NOTION_CONFIG } = useGlobal()
  const showPageCover = siteConfig('MIKU_POST_COVER_ENABLE', false, CONFIG)
  const showPreview =
    siteConfig('POST_LIST_PREVIEW', false, NOTION_CONFIG) && post.blockMap

  return (
    <div
      key={post.id}
      className='h-42 my-6 pb-12 border-b border-white/20 dark:border-white/10'>
      {/* 文章标题 */}

      <div className='flex'>
        <div className='article-cover h-full'>
          {/* 图片封面 */}
          {showPageCover && (
            <div className='overflow-hidden mr-2 w-56 h-full rounded-xl'>
              <SmartLink href={post.href} passHref legacyBehavior>
                <LazyImage
                  src={post?.pageCoverThumbnail}
                  className='w-56 h-full object-cover object-center group-hover:scale-110 duration-500'
                />
              </SmartLink>
            </div>
          )}
        </div>

        <article className='article-info'>
          <h2 className='mb-2'>
            <SmartLink
              href={post.href}
              className='blog-item-title font-bold text-gray-800 dark:text-gray-100 text-2xl menu-link hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors'>
              {siteConfig('POST_TITLE_ICON') && (
                <NotionIcon icon={post.pageIcon} />
              )}
              {post.title}
            </SmartLink>
          </h2>

          {/* 文章信息 */}
          <header className='mb-5 text-md text-gray-700 dark:text-gray-300 flex-wrap flex leading-6'>
            <div className='space-x-2'>
              <span>
                {' '}
                <a
                  href={siteConfig('MIKU_AUTHOR_LINK', null, CONFIG)}
                  className='p-1 hover:text-cyan-500 transition-all duration-200'>
                  <i className='fa-regular fa-user'></i> {siteConfig('AUTHOR')}
                </a>
              </span>
              <span>
                <SmartLink
                  className='p-1 hover:text-cyan-500 transition-all duration-200'
                  href={`/archive#${formatDateFmt(post?.publishDate, 'yyyy-MM')}`}>
                  <i className='fa-regular fa-clock' />{' '}
                  {post.date?.start_date || post.createdTime}
                </SmartLink>
              </span>
              <span>
                <TwikooCommentCount post={post} />
              </span>
            </div>

            <div>
              {post.category && (
                <SmartLink href={`/category/${post.category}`} className='p-1'>
                  {' '}
                  <span className='hover:text-cyan-500 transition-all duration-200'>
                    <i className='fa-regular fa-folder mr-0.5' />
                    {post.category}
                  </span>
                </SmartLink>
              )}
              {post?.tags &&
                post?.tags?.length > 0 &&
                post?.tags.map(t => (
                  <SmartLink
                    key={t}
                    href={`/tag/${t}`}
                    className=' hover:text-cyan-500 transition-all duration-200'>
                    <span> /{t}</span>
                  </SmartLink>
                ))}
            </div>
          </header>

          <main className='text-gray-700 dark:text-gray-300 leading-normal mb-6'>
            {!showPreview && (
              <>
                {post.summary}
                {post.summary && <span>...</span>}
              </>
            )}
            {showPreview && post?.blockMap && (
              <div className='overflow-ellipsis truncate'>
                <NotionPage post={post} />
                <hr className='border-dashed py-4 border-white/30 dark:border-white/10' />
              </div>
            )}
          </main>
        </article>
      </div>

      <div className='block'>
        <SmartLink
          href={post.href}
          className='inline-block rounded-full text-cyan-600 dark:text-cyan-400 text-xs border border-cyan-500/30 dark:border-cyan-400/30 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:border-transparent h-9 leading-8 px-5 backdrop-blur-sm bg-white/30 dark:bg-black/30'>
          Continue Reading{' '}
          <i className='fa-solid fa-angle-right align-middle'></i>
        </SmartLink>
      </div>
    </div>
  )
}
