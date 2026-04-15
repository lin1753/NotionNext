import { siteConfig } from '@/lib/config'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMikuGlobal } from '..'
import { MenuList } from './MenuList'

/**
 * 菜单导航
 * @param {*} props
 * @returns
 */
export default function NavBar(props) {
  const [showSearchInput, changeShowSearchInput] = useState(false)
  const router = useRouter()
  const { searchModal } = useMikuGlobal()

  // 展示搜索�?
  const toggleShowSearchInput = () => {
    if (siteConfig('ALGOLIA_APP_ID')) {
      searchModal.current.openSearch()
    } else {
      changeShowSearchInput(!showSearchInput)
    }
  }

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      const search = document.getElementById('miku-search').value
      if (search) {
        router.push({ pathname: '/search/' + search })
      }
    }
  }

  return (
    <nav className='w-full bg-white/70 dark:bg-black/60 md:pt-0 relative z-20 backdrop-blur-md border-t border-white/30 dark:border-white/10'>
      <div
        id='nav-bar-inner'
        className='flex relative h-12 mx-auto max-w-9/10 justify-between items-center text-sm md:text-md md:justify-start'>
        {/* 左侧菜单 */}
        <div className='h-full w-full flex items-center md:justify-start space-x-4 pr-10'>
          {showSearchInput && (
            <input
              autoFocus
              id='miku-search'
              onKeyUp={onKeyUp}
              className='float-left w-full outline-none h-full px-4 bg-transparent'
              aria-label='Submit search'
              type='search'
              name='s'
              autoComplete='off'
              placeholder='Type then hit enter to search...'
            />
          )}
          {!showSearchInput && <MenuList {...props} />}
        </div>

        <div className='absolute right-0 h-full text-center px-2 flex items-center text-cyan-500 cursor-pointer'>
          {/* <!-- extra links --> */}
          <i
            className={
              showSearchInput
                ? 'fa-regular fa-circle-xmark'
                : 'fa-solid fa-magnifying-glass' + ' align-middle'
            }
            onClick={toggleShowSearchInput}></i>
        </div>
      </div>
    </nav>
  )
}
