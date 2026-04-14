import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState } from 'react'
let lock = false

const SearchInput = ({ keyword, cRef, className }) => {
  const [onLoading, setLoadingState] = useState(false)
  const router = useRouter()
  const searchInputRef = useRef()
  useImperativeHandle(cRef, () => {
    return {
      focus: () => {
        searchInputRef?.current?.focus()
      }
    }
  })

  const handleSearch = () => {
    const key = searchInputRef.current.value

    if (key && key !== '') {
      setLoadingState(true)
      location.href = '/search/' + key
    } else {
      router.push({ pathname: '/' }).then(r => {
      })
    }
  }
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) { // 回车
      handleSearch(searchInputRef.current.value)
    } else if (e.keyCode === 27) { // ESC
      cleanSearch()
    }
  }
  const cleanSearch = () => {
    searchInputRef.current.value = ''
  }

  const [showClean, setShowClean] = useState(false)
  const updateSearchKey = (val) => {
    if (lock) {
      return
    }
    searchInputRef.current.value = val

    if (val) {
      setShowClean(true)
    } else {
      setShowClean(false)
    }
  }
  function lockSearchInput() {
    lock = true
  }

  function unLockSearchInput() {
    lock = false
  }

  return <div className={'glass-card flex w-full rounded-full px-4 bg-white/80 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 ' + className}>
    <input
      ref={searchInputRef}
      type='text'
      className={'outline-none w-full text-sm pl-2 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/10 font-light leading-10 text-gray-800 bg-transparent dark:text-white placeholder-gray-400'}
      onKeyUp={handleKeyUp}
      onCompositionStart={lockSearchInput}
      onCompositionUpdate={lockSearchInput}
      onCompositionEnd={unLockSearchInput}
      onChange={e => updateSearchKey(e.target.value)}
      defaultValue={keyword}
      placeholder="搜索文章..."
    />

    <div className='-ml-8 cursor-pointer float-right items-center justify-center py-2'
      onClick={handleSearch}>
      <i className={`hover:text-cyan-500 transform duration-200 text-gray-500 dark:hover:text-cyan-400 cursor-pointer fas ${onLoading ? 'fa-spinner animate-spin' : 'fa-search'} `} />
    </div>

    {(showClean &&
      <div className='-ml-12 cursor-pointer float-right items-center justify-center py-2'>
        <i className='fas fa-times hover:text-cyan-500 transform duration-200 text-gray-400 cursor-pointer dark:hover:text-cyan-400' onClick={cleanSearch} />
      </div>
    )}
  </div>
}

export default SearchInput
