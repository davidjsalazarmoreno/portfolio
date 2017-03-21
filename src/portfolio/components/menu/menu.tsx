import * as React from 'react';

import './menu.scss';

export interface IMenuComponentProps {
  links: Array<{ text: string, url: string }>;
};

export const MenuComponent = ( props: IMenuComponentProps ) => {
  // Props
  const { links } = props;

  return (
    <nav className="MenuComponent">
      <ul>
        {
          links.map((link, index) => {
            return (
              <li>
                <a 
                  onClick={(event) => {
                    event.preventDefault();
                    const id = link.url;
                    const element = document.querySelector( id )

                    element.scrollIntoView({
                      behavior: 'smooth'
                    });
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
    </nav>
  );
}

export default MenuComponent
