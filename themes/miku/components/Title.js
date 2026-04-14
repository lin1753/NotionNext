import { siteConfig } from '@/lib/config'

/**
 * 标题栏
 * @param {*} props
 * @returns
 */
export const Title = (props) => {
  const { post } = props
  const title = post?.title || siteConfig('DESCRIPTION')
  const description = post?.description || siteConfig('AUTHOR')

  return (
    <div className="text-center px-6 py-12 mb-6 glass-card rounded-2xl bg-white/70 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10">
      <h1 className="text-xl md:text-4xl pb-4 text-gray-800 dark:text-gray-100 font-bold">
        {title}
      </h1>
      <p className="leading-loose text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}
