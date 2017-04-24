// React
import * as React from 'react';

// React Storybook
import { storiesOf, action, linkTo, module } from '@kadira/storybook';

// Containers/Components
import {MenuComponent} from '../portfolio/components/menu/menu.component';

class Container extends React.Component<any, any> {
  state = {
    isMenuVisible: false
  }
  
  public render(): JSX.Element {
    return (
       <MenuComponent
        text="Menu"
        links={[
          { text: 'About', url: '#about' },
          { text: 'Portfolio', url: '#portfolio' },
          { text: 'Contact me', url: '#contact' },
        ]}
        isMenuVisible={this.state.isMenuVisible}
        onMenuToggle={() => {
          this.setState((state, props) => {
            return ({
              ...state, 
              isMenuVisible: !state.isMenuVisible
            })
          })
        }}
      />
    );
  }
}


storiesOf('Menu Component', module)
  .add('default view', () => {
    return (
      <MenuComponent
        text="Menu"
        links={[
          { text: 'About', url: '#about' },
          { text: 'Portfolio', url: '#portfolio' },
          { text: 'Contact me', url: '#contact' },
        ]}
        isMenuVisible={false}
        onMenuToggle={() => {}}
      />
    );
  })
  .add('selected view', () => {
    return (
      <MenuComponent
        text="Menu"
        links={[
          { text: 'About', url: '#about' },
          { text: 'Portfolio', url: '#portfolio' },
          { text: 'Contact me', url: '#contact' },
        ]}
        isMenuVisible={true}
        onMenuToggle={() => {}}
      />
    );
  })
  .add('interactive view', () => {
    return (
      <Container />
    );
  });