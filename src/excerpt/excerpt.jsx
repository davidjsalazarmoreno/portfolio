import * as React from 'react';

require('./excerpt.scss');

export class ExcerptComponent extends React.Component {
  state = {
    showMore: false
  };

  render() {
    const { short, long } = this.props;

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
              {!showMore ? 'more' : 'less'}
            </a>
            .
          </p>
        </article>
      </div>
    )

  }
};

export default ExcerptComponent;