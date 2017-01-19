// React
import * as React from 'react';

// React intl
import {FormattedMessage, IntlProvider} from 'react-intl';

// Components
import {LanguageSelectorComponent} from './language-selector/language-selector';
import {GithubRibbon} from './github-ribbon/github-ribbon';
import {FlatSeparatorComponent} from './flat-separator/flat-separator';
import {ShowcaseComponent} from './showcase/showcase';
import {HeaderComponent} from './header/header';
import {ExcerptComponent} from './excerpt/excerpt';
import {FiltersComponent} from './filters/filters';
import {ProjectComponent} from './project/project';
import {SocialComponent} from './social/social';
import {FooterComponent} from './footer/footer';

// Intl Messages
import {messages} from './messages';

import {ILCShowcase, networks, pmShowcase} from './config';

// Styles
import './portfolio.scss';

interface IPortfolioContainerState {
  language: string;
};

export class PortfolioContainer extends React.Component<any, IPortfolioContainerState> {
  state = {
    language: 'en'
  };

  constructor(props) {
    super(props);
  }

  render() {
    // State
    const { language } = this.state;

    return (
      <IntlProvider locale={language}>
        <section className="PortfolioComponent">
          <LanguageSelectorComponent 
            languages={[
              'en' ,
              'es',
            ]}
            selected={language}
            messages={messages}
            onChange={(event) => {
              const languageSelected = event.target.value;

              console.log(languageSelected);

              this.setState({
                ...this.state,
                language: languageSelected
              });
            }} 
          />

          <GithubRibbon />
          
          <HeaderComponent />
          {/** /Header excerpt */}
          <FlatSeparatorComponent margin="16px auto" width="20%" />

          <ExcerptComponent
            short={
              <span>
                <FormattedMessage {...messages.excerptShort} />
              </span>
            }
            long={
              <FormattedMessage {...messages.excerptLong} />
            }
          />
          
          {/** /Portfolio excerpt */}
          
          <hr />

          <FiltersComponent />
          {/** /Project filters */}

          <ProjectComponent 
            id="playsmatch" 
            image="/pm-showcase-1.png" 
            name="Cuádrala / Playsmatch"
            excerpt={<FormattedMessage {...messages.pmDescription} />}
            information={[
              { key: 'Client', value: 'Cuádrala / Playsmatch' },
              { key: 'Period', value: <FormattedMessage {...messages.pmPeriod} /> },
              { key: 'Work Type', value: 'FullTime' },
              { key: 'Role', value: 'Full Stack Web Developer' },
              { key: 'Technologies used', value: 'React / Nodejs' },
              { key: 'Company Website', value: <a href="https://www.cuadrala.com">Cuádrala</a> }
            ]}
          />


          <ShowcaseComponent id="PlaysmatchShowcase" title="Showcase" elements={pmShowcase} emptyStateText="Soon (Work in progress ;-D)" />
          {/** /Playsmatch Project and showcase */}
          
          <ProjectComponent 
            id="systrix" 
            image="/Systrix/sys-3.jpg" 
            name="Systrix"
            excerpt="Web development, media agency and call center outsourcing."
            information={[
              { key: 'Client', value: 'Systrix' },
              { key: 'Period', value: <FormattedMessage {...messages.sysPeriod} /> },
              { key: 'Work Type', value: 'FullTime' },
              { key: 'Role', value: 'Full Stack Web Developer / Wordpress Developer / Frontend Team Leader' },
              { key: 'Technologies used', value: 'Angular 2 / React/ Elixir / Phoenix / Elm' },
              { key: 'Company Website', value: <a href="https://www.linkedin.com/company/systrix">Systrix</a> }
            ]}
          />

          <ShowcaseComponent 
            id="SystrixShowcase" 
            title="Showcase"
            columnCount="2" 
            elements={[
              {
                type: 'image',
                url: '/Systrix/sys-1.jpg',
                alt: 'Angular Survey Prototype',
                id: 'sys-yt-1'
              },
              {
                type: 'image',
                url: '/Systrix/sys-2.jpg',
                alt: 'Angular Survey Prototype',
                id: 'sys-yt-1'
              },
              {
                type: 'image',
                url: '/Systrix/sys-3.jpg',
                alt: 'Angular Survey Prototype',
                id: 'sys-yt-1'
              },
              {
                type: 'image',
                url: '/Systrix/sys-4.jpg',
                alt: 'Angular Survey Prototype',
                id: 'sys-yt-1'
              },
              {
                type: 'youtube',
                url: 'Dr732zk-ltw',
                alt: 'Angular Survey Prototype',
                id: 'sys-yt-1'
              },
              {
                type: 'youtube',
                url: 'opDk68CFwLA',
                alt: 'Working demo of Survey in IE11',
                id: 'sys-yt-2'
              },
            ]} 
          />
          {/** /Systrix Project and showcase */}

          <ProjectComponent 
            id="GE" 
            image="/GE/ge.jpeg" 
            name="Gente Excelente Venezuela"
            excerpt="We are Gente Excelente Venezuela. Our mission is the success of People. Our motto Saving in readiness is to invest in ignorance. Life Coaching"
            information={[
              { key: 'Client', value: 'Gente Excelente Venezuela' },
              { key: 'Period', value: '2016' },
              { key: 'Work Type', value: 'Freelancer' },
              { key: 'Role', value: 'Web Developer / Wordpress Consultant' },
              { key: 'Technologies used', value: 'Wordpress / HTML / CSS / Javascript' },
              { key: 'Company Website', value: <a href="http://gentexcelente.com">gentexcelente.com</a> }
            ]}
          />

          <ShowcaseComponent 
            id="GenteExcelenteVenezuelaShowcase" 
            title="Showcase" 
            emptyStateText="Soon" 
            elements={[]}
            columnCount="2" 
          />
          {/** /Gente excelente project and showcase */}

          <ProjectComponent 
            id="ilc" 
            image="/ilc/ilc-main.jpg" 
            name="ILC Academy"
            excerpt="ILC Academy, a platform for expanding awareness, knowledge and skills to enhance your attributes like LifeCoach."
            information={[
              { key: 'Client', value: 'ILC Academy' },
              { key: 'Period', value: <FormattedMessage {...messages.ilcPeriod} /> },
              { key: 'Work Type', value: 'FullTime' },
              { key: 'Role', value: 'Web Developer / Wordpress Consultant / Project Leader' },
              { key: 'Technologies used', value: 'Wordpress / jQuery / HTML / CSS' },
              { key: 'Company Website', value: <a href="http://ilcacademy.com/">ilcacademy.com</a> }
            ]}
          />

          <ShowcaseComponent 
            id="ILCAcademyShowcase" 
            title="Showcase" 
            emptyStateText="Soon"
            columnCount="2" 
            elements={ILCShowcase} 
          />
          {/** /ILC Academy Project and showcase */}

          <hr />
          <FooterComponent />

        </section>
      </IntlProvider>
    );
  }
};

export default PortfolioContainer;


