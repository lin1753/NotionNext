import SmartLink from '@/components/SmartLink'
import { RecentComments } from '@waline/client'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/config'

/**
 * @see https://waline.js.org/guide/get-started.html
 * @param {*} props
 * @returns
 */
const ExampleRecentComments = (props) => {
  const [comments, updateComments] = useState([])
  const [onLoading, changeLoading] = useState(true)
  useEffect(() => {
    RecentComments({
      serverURL: siteConfig('COMMENT_WALINE_SERVER_URL'),
      count: 5
    }).then(({ comments }) => {
      changeLoading(false)
      updateComments(comments)
    })
  }, [])

  return (
    <div className="glass-card p-4 rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10">
      {onLoading && (
        <div className="text-center py-2">
          <i className='fas fa-spinner animate-spin text-cyan-500' />
          <span className="ml-2 text-gray-600 dark:text-gray-400">Loading...</span>
        </div>
      )}
      {!onLoading && comments && comments.length === 0 && (
        <div className="text-center py-2 text-gray-500 dark:text-gray-400">
          <i className="far fa-comment-dots mr-2"></i>
          No Comments
        </div>
      )}
      {!onLoading && comments && comments.length > 0 && comments.map((comment) => (
        <div key={comment.objectId} className='pb-3 border-b border-white/20 dark:border-white/10 last:border-b-0'>
          <div className='dark:text-gray-300 text-gray-600 text-xs waline-recent-content wl-content mb-1' dangerouslySetInnerHTML={{ __html: comment.comment }} />
          <div className='dark:text-gray-400 text-gray-400 text-sm text-right cursor-pointer hover:text-cyan-500 transition-colors duration-200 pt-1'>
            <SmartLink href={{ pathname: comment.url, hash: comment.objectId, query: { target: 'comment' } }}>
              —— {comment.nick}
            </SmartLink>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExampleRecentComments
