import type { ComponentPropsWithoutRef } from 'react';

type Props = {
  link: string;
  text: string;
  className?: string;
  id?: string;
  showIcon?: boolean
} & ComponentPropsWithoutRef<"a">

const Link = (props: Props) => {
  const { id = "", showIcon = true, text, link, target='_blank', className = '' } = props;

  return (
    <a className={`${className} text-white text-md no-underline cursor-pointer align-text-top hover:underline`}
      href={link} 
      target={target} 
      id={id}
    >
	    {text}
	    { showIcon && <svg className='inline-block mb-1' xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ffffff" viewBox="0 0 256 256"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg> }
    </a>
  )
}

export default Link;
