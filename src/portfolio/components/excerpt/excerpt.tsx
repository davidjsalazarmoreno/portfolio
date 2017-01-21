import * as React from 'react';

import './excerpt.scss';


interface IExcerptComponentProps {
  short: string | JSX.Element;
  long: string | JSX.Element;
  moreLabel: string | JSX.Element;
  lessLabel: string | JSX.Element;
};

export class ExcerptComponent extends React.Component<IExcerptComponentProps, any> {
  state = {
    showMore: false
  };

  render() {
    const { short, long, moreLabel, lessLabel } = this.props;

    const { showMore } = this.state;

    return (
      <div className="ExcerptComponent">
        <article>
          <p className="description">
            {showMore ? long : short}
            &nbsp;
            <a href="#" 
              onClick={(event) => {
                event.preventDefault();
                this.setState({
                  ...this.state,
                  showMore: !showMore
              });
            }}>
              {!showMore ?  moreLabel : lessLabel}
            </a>
            .
          </p>
        </article>
      </div>
    )

  }
};

export default ExcerptComponent;