import React from 'react'

import type {
  FC,
  PropsWithChildren
} from 'react'

export type ButtonProps = PropsWithChildren<{
  el?: 'button' | 'a'
  color?: 'primary' | 'secondary'
} & Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, 'className'>>

export const Button: FC<ButtonProps> = ({
  color = 'primary',
  el = 'button',
  children,
  ...anchorProps
}) => {
  const Element = el as any
  return (
    <Element {...anchorProps} className={(color === 'primary' ? 'bg-primary hover:bg-primary-40 focus:ring-primary-20' : 'bg-secondary hover:bg-primary-60 focus:ring-secondary-20') + " py-2 px-4 text-white rounded-sm focus:outline-none focus:ring focus:ring-2 transition-all duration-300"}>
      {children}
    </Element>
  )
}
