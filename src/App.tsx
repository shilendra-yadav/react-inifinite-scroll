import { FC, useEffect, useState } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {

  const [count, setCount] = useState(50);

  useEffect(() => {
    let onScroll = () => {
      if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight){
        setCount(count + 50);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  }, [count])

  const elements = [];

  for(let i = 0; i < count; i++){
    elements.push(<div key={i}>{i}</div>)
  }
  return (
    <div>
      {elements}
    </div>
  );
};
