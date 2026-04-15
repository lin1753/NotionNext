import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  if (!link || !link.show) {
    return null
  }

  return (
    <div
      onMouseOver={() => changeShow(true)}
      onMouseOut={() => changeShow(false)}
      className='relative'>
      {!hasSubMenu && (
        <SmartLink
          href={link?.href}
          target={link?.target}
          className=' menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1'>
          {link?.icon && (
            <span className='mr-2'>
              <i className={link.icon} />
            </span>
          )}
          {link?.name}
          {hasSubMenu && <i className='px-2 fa fa-angle-down'></i>}
        </SmartLink>
      )}

      {hasSubMenu && (
        <>
          <div className='cursor-pointer menu-link pl-2 pr-4 text-gray-700 dark:text-gray-200 no-underline tracking-widest pb-1'>
            {link?.icon && (
              <span className='mr-2'>
                <i className={link.icon} />
              </span>
            )}{' '}
            {link?.name}
            <i
              className={`px-2 fas fa-chevron-down duration-500 transition-all ${show ? ' rotate-180' : ''}`}></i>
            {/* 主菜单下方的安全区域 */}
            {show && (
              <div className='absolute w-full h-8 -bottom-8 left-0 bg-transparent z-30'></div>
            )}
          </div>
        </>
      )}

      {/* 子菜单 */}
      {hasSubMenu && (
        <ul
          className={`${show ? 'visible opacity-100 top-12' : 'invisible opacity-0 top-10'} border border-white/30 bg-white/85 backdrop-blur-md dark:bg-black/70 dark:border-white/10 transition-all duration-300 z-20 absolute block drop-shadow-lg rounded-xl overflow-hidden`}>
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={index}
                className='not:last-child:border-b-0 border-b text-cyan-600 dark:text-cyan-300 hover:bg-cyan-50/50 dark:hover:bg-white/10 tracking-widest transition-all duration-200 dark:border-white/10 py-3 pr-6 pl-2'>
                <SmartLink href={sLink.href} target={link?.target}>
                  <span className='text-sm text-nowrap'>
                    {sLink?.icon && <i className={sLink?.icon}> &nbsp; </i>}
                    {sLink.title}
                  </span>
                </SmartLink>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
