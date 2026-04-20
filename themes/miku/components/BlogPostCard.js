import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import { BlogPostCardInfo } from './BlogPostCardInfo'

const BlogPostCard = ({
  index,
  post,
  showSummary,
  siteInfo,
  isFeatured // 从上层引入的判断标记
}) => {
  const showPreview =
    siteConfig('HEXO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEXO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover =
    siteConfig('HEXO_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail &&
    !showPreview
  
  // 仅在非 featured 且为奇数索引时翻转
  const isCrossover = siteConfig('HEXO_POST_LIST_IMG_CROSSOVER', null, CONFIG) && !isFeatured && index % 2 === 1

  // 如果是 Featured 则保持高度较大、跨行展示；不是的话保持固定高度以维持 Grid 整齐
  const heightClass = isFeatured ? 'md:h-72' : 'md:h-60'

  return (
    <div className="w-full h-full flex">
      <div
        key={post.id}
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        data-aos-duration='500'
        data-aos-once='false'
        data-aos-anchor-placement='top-bottom'
        id='blog-post-card'
        className={`group ${heightClass} w-full flex justify-between md:flex-row flex-col-reverse ${isCrossover ? 'md:flex-row-reverse' : ''}
                    overflow-hidden elevated-card`}>
        {/* 文字内容 */}
        <div className={`p-6 flex flex-col justify-between ${isFeatured ? 'md:w-1/2' : 'md:w-3/5 w-full'}`}>
          <BlogPostCardInfo
            index={index}
            post={post}
            showPageCover={showPageCover}
            showPreview={showPreview}
            showSummary={showSummary || isFeatured} // 大卡片强制显示摘要
          />
        </div>

        {/* 图片封面 */}
        {showPageCover && (
          <div className={`${isFeatured ? 'md:w-1/2' : 'md:w-2/5 w-full'} overflow-hidden relative`}>
            <SmartLink href={post?.href}>
              <>
                <LazyImage
                  priority={index === 1}
                  alt={post?.title}
                  src={post?.pageCoverThumbnail}
                  className='h-full w-full object-cover object-center group-hover:scale-110 duration-500'
                />
              </>
            </SmartLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPostCard
