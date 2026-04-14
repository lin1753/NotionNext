import { useGlobal } from '@/lib/global'
import { useEffect, useRef } from 'react'

/**
 * 加密文章校验组件
 * @param {password, validPassword} props
 * @param password 正确的密码
 * @param validPassword(bool) 回调函数，校验正确回调入参为true
 * @returns
 */
export default function ArticleLock(props) {
  const { validPassword } = props
  const { locale } = useGlobal()

  const submitPassword = () => {
    const p = document.getElementById('password')
    if (!validPassword(p?.value)) {
      const tips = document.getElementById('tips')
      if (tips) {
        tips.innerHTML = ''
        tips.innerHTML = `<div class='text-red-500 animate__shakeX animate__animated'>${locale.COMMON.PASSWORD_ERROR}</div>`
      }
    }
  }
  const passwordInputRef = useRef(null)
  useEffect(() => {
    // 选中密码输入框并将其聚焦
    passwordInputRef.current.focus()
  }, [])

  return (
    <div id='container' className='w-full flex justify-center items-center h-96 '>
      <div className='glass-card p-8 rounded-2xl text-center space-y-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 max-w-md w-full mx-4'>
        <div className='text-cyan-600 dark:text-cyan-400 font-bold text-lg mb-2'>
          <i className='fas fa-lock mr-2'></i>
          {locale.COMMON.ARTICLE_LOCK_TIPS}
        </div>
        <div className='flex mx-4'>
          <input
            id="password"
            type='password'
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitPassword()
              }
            }}
            ref={passwordInputRef}
            className='outline-none w-full text-sm pl-5 rounded-l-lg transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20 font-light leading-10 text-gray-800 dark:text-white bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 border-r-0'
          />
          <div
            onClick={submitPassword}
            className="px-5 whitespace-nowrap cursor-pointer items-center justify-center py-2 rounded-r-lg duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            <i className={'duration-200 cursor-pointer fas fa-key'}>&nbsp;{locale.COMMON.SUBMIT}</i>
          </div>
        </div>
        <div id='tips' className='h-6'>
        </div>
      </div>
    </div>
  )
}
