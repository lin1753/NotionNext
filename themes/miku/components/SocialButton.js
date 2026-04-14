import { siteConfig } from '@/lib/config'
import { useRef } from 'react'
import { handleEmailClick } from '@/lib/plugins/mailEncrypt'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  const CONTACT_EMAIL = siteConfig('CONTACT_EMAIL')
  const emailIcon = useRef(null)

  return (
    <div className='w-52 justify-center flex-wrap flex my-2'>
      <div className='space-x-3 md:text-xl text-3xl text-gray-600 dark:text-gray-400 text-center'>
        {siteConfig('CONTACT_GITHUB') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'github'}
            href={siteConfig('CONTACT_GITHUB')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-github' />
          </a>
        )}
        {siteConfig('CONTACT_TWITTER') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'twitter'}
            href={siteConfig('CONTACT_TWITTER')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-twitter' />
          </a>
        )}
        {siteConfig('CONTACT_TELEGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_TELEGRAM')}
            title={'telegram'}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-telegram' />
          </a>
        )}
        {siteConfig('CONTACT_LINKEDIN') && (
          <a
            target='_blank'
            rel='noreferrer'
            href={siteConfig('CONTACT_LINKEDIN')}
            title={'linkedIn'}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-linkedin' />
          </a>
        )}
        {siteConfig('CONTACT_WEIBO') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'weibo'}
            href={siteConfig('CONTACT_WEIBO')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-weibo' />
          </a>
        )}
        {siteConfig('CONTACT_INSTAGRAM') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'instagram'}
            href={siteConfig('CONTACT_INSTAGRAM')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-instagram' />
          </a>
        )}
        {CONTACT_EMAIL && (
          <a
            onClick={e =>
              handleEmailClick(e, emailIcon, CONTACT_EMAIL)
            }
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'
            title={'email'}
            ref={emailIcon}>
            <i className='fas fa-envelope' />
          </a>
        )}
        {JSON.parse(siteConfig('ENABLE_RSS')) && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'RSS'}
            href={'/rss/feed.xml'}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fas fa-rss' />
          </a>
        )}
        {siteConfig('CONTACT_BILIBILI') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'bilibili'}
            href={siteConfig('CONTACT_BILIBILI')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-bilibili' />
          </a>
        )}
        {siteConfig('CONTACT_YOUTUBE') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'youtube'}
            href={siteConfig('CONTACT_YOUTUBE')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-youtube' />
          </a>
        )}
        {siteConfig('CONTACT_THREADS') && (
          <a
            target='_blank'
            rel='noreferrer'
            title={'threads'}
            href={siteConfig('CONTACT_THREADS')}
            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:border-cyan-400/50 hover:text-cyan-500 transition-all duration-300 hover:scale-110'>
            <i className='fab fa-threads' />
          </a>
        )}
      </div>
    </div>
  )
}
export default SocialButton
