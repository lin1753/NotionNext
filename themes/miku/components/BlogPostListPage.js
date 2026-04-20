import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationNumber from './PaginationNumber'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const showPagination = postCount >= POSTS_PER_PAGE
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div id='container' className='w-full'>
        {/* 文章列表双排网格布局 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-2'>
          {posts?.map((post, index) => (
            <div key={post.id} className={`${index === 0 ? 'md:col-span-2' : 'col-span-1'}`}>
              <BlogPostCard
                index={posts.indexOf(post)}
                post={post}
                siteInfo={siteInfo}
                isFeatured={index === 0}
              />
            </div>
          ))}
        </div>
        {showPagination && (
          <div className='mt-8'>
            <PaginationNumber page={page} totalPage={totalPage} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogPostListPage
