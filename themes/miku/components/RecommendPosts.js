import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 展示文章推荐
 */
const RecommendPosts = ({ recommendPosts }) => {
  const { locale } = useGlobal()
  if (!siteConfig('MIKU_ARTICLE_RECOMMEND_POSTS', null, CONFIG) || !recommendPosts || recommendPosts.length < 1) {
    return <></>
  }

  return (
    <div className="glass-card p-5 rounded-2xl my-4 dark:text-gray-300 bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10">
      <div className="mb-3 font-bold text-lg text-cyan-600 dark:text-cyan-400 flex items-center">
        <i className='fas fa-thumbs-up mr-2'></i>
        {locale.COMMON.RELATE_POSTS} :
      </div>
      <ul className="font-light text-sm space-y-2">
        {recommendPosts.map(post => (
          <li className="py-1 flex items-start" key={post.id}>
            <i className='fas fa-chevron-right text-cyan-500/60 text-xs mt-1 mr-2'></i>
            <SmartLink href={`/${post.slug}`} className="cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
              {post.title}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default RecommendPosts
