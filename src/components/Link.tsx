import '../styles/Link.css';
import type { ComponentPropsWithoutRef } from 'react';

type PropsType = {
  link: string;
  text: string;
  id?: string;
  showIcon?: boolean
} & ComponentPropsWithoutRef<"a">

const Link = (props: PropsType) => {
  const { id = "", showIcon = true, text, link, target='_blank' } = props;
  return (
    <a href={link} target={target} id={id}>
	    {text}
	    { showIcon && <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="#ffffff" viewBox="0 0 256 256"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"></path></svg> }
    </a>
  )
}

export default Link;
