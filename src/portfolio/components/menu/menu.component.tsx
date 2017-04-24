import * as React from 'react';

import './menu.component.scss';

export interface IMenuComponentProps {
  text: string;
  links: Array<{ text: string, url: string }>;
  isMenuVisible: boolean;
  onMenuToggle: () => void;
};

function MenuButtonComponent( props ) {
  const { onMenuToggle, text } = props;
  return (
    <button type="button" onClick={onMenuToggle}>
      <span>
        {text}
      </span>
      <i className="fa fa-bars"></i>
      <i className="fa fa-close"></i>
    </button>
  );
}

export const MenuComponent = ( props: IMenuComponentProps ) => {
  // Props
  const { text, links, isMenuVisible, onMenuToggle } = props;
 
  return (
    <nav className="MenuComponent">
      <ul className={isMenuVisible ? 'showMenu' : ''}>
        {
          links.map((link, index) => {
            return (
              <li>
                <a 
                  onClick={event => {
                    event.preventDefault();
                    const id = link.url;
                    const element = document.querySelector( id )

                    element.scrollIntoView({ behavior: 'smooth' });
                    onMenuToggle();
                  }} 
                  href={link.url}
                >
                  {link.text}
                </a>
              </li>
            );
          })
        }
      </ul>
      
      <MenuButtonComponent text={text} onMenuToggle={onMenuToggle} />
    </nav>
  );
}

export default MenuComponent
