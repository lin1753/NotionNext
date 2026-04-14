import Collapse from '@/components/Collapse'
import SmartLink from '@/components/SmartLink'
import { useState } from 'react'

/**
 * 折叠菜单
 * @param {*} param0
 * @returns
 */
export const MenuItemCollapse = props => {
  const { link } = props
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  const [isOpen, changeIsOpen] = useState(false)

  const toggleShow = () => {
    changeShow(!show)
  }

  const toggleOpenSubMenu = () => {
    changeIsOpen(!isOpen)
  }

  if (!link || !link.show) {
    return null
  }

  return (
    <>
      <div
        className='w-full px-8 py-3 text-left border-b border-white/20 dark:bg-black/40 dark:border-white/10 bg-white/60 backdrop-blur-sm'
        onClick={toggleShow}>
        {!hasSubMenu && (
          <SmartLink
            href={link?.href}
            target={link?.target}
            className='items-center flex justify-between pl-2 pr-4 dark:text-gray-200 no-underline tracking-widest pb-1'>
            <span className='text-cyan-600 dark:text-cyan-300 hover:text-cyan-500 transition-all items-center duration-200'>
              {link?.icon && (
                <span className='mr-2'>
                  <i className={link.icon} />
                </span>
              )}
              {link?.name}
            </span>
          </SmartLink>
        )}
        {hasSubMenu && (
          <div
            onClick={hasSubMenu ? toggleOpenSubMenu : null}
            className='items-center flex justify-between pl-2 pr-4 cursor-pointer dark:text-gray-200 no-underline tracking-widest pb-1'>
            <span className='text-cyan-600 dark:text-cyan-300 hover:text-cyan-500 transition-all items-center duration-200'>
              {link?.icon && (
                <span className='mr-2'>
                  <i className={link.icon} />
                </span>
              )}
              {link?.name}
            </span>
            <i
              className={`px-2 fa fa-plus transition-all duration-200 ${isOpen && 'rotate-45'} text-gray-400`}></i>
          </div>
        )}
      </div>

      {/* 折叠子菜单 */}
      {hasSubMenu && (
        <Collapse isOpen={isOpen} onHeightChange={props.onHeightChange}>
          {link.subMenus.map((sLink, index) => {
            return (
              <div
                key={index}
                className='dark:bg-black/60 text-left px-10 justify-start text-cyan-600 dark:text-cyan-300 bg-cyan-50/30 hover:bg-cyan-50/60 dark:hover:bg-white/10 tracking-widest transition-all duration-200 border-b border-white/20 dark:border-white/10 py-3 pr-6'>
                <SmartLink href={sLink.href} target={link?.target}>
                  <span className='ml-4 text-sm'>
                    {sLink?.icon && (
                      <span className='mr-2 w-4'>
                        <i className={sLink.icon} />
                      </span>
                    )}
                    {sLink.title}
                  </span>
                </SmartLink>
              </div>
            )
          })}
        </Collapse>
      )}
    </>
  )
}
