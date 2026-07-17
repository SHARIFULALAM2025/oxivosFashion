import Link from 'next/link';
import React from 'react';

const Button = ({
  href,
  icon,
  iconPosition ="left",
  className = '',
  onClick,
  children,
  ...rest
}) => {
  const content = (
    <>
      {iconPosition === 'left' && icon}
      <span >{children}</span>
      {iconPosition === 'right' && icon}
    </>
  )
  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick} {...rest}>
        {content}
      </Link>
    )
  }
  return (
    <div>
      <button className={className} onClick={onclick} {...rest}>
        {content}
      </button>
    </div>
  )
}

export default Button;