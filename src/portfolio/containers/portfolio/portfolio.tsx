// React
import * as React from 'react';

// React intl
import {FormattedMessage, IntlProvider} from 'react-intl';

// Components
import {LanguageSelectorComponent} from './../../components/language-selector/language-selector';
import {GithubRibbon} from './../../components/github-ribbon/github-ribbon';
import {FlatSeparatorComponent} from './../../components/flat-separator/flat-separator';
import {ShowcaseComponent} from './../../components/showcase/showcase';
import {HeaderComponent} from './../../components/header/header';
import {ExcerptComponent} from './../../components/excerpt/excerpt';
import {SectionHeaderComponent} from './../../components/section-header/section-header';
import {ProjectComponent} from './../../components/project/project';
import {SocialComponent} from './../../components/social/social';
import {FooterComponent} from './../../components/footer/footer';

// Intl Messages
import {messages} from './../../messages';

import {pmShowcase, sysShowcase, geShowcase, ILCShowcase, networks} from './../../config/index';

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
            languageLabel={<FormattedMessage {...messages.language} />}
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
          
          <HeaderComponent avatarUrl="/avatar.jpg" />
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
            moreLabel={<FormattedMessage {...messages.more} />}
            lessLabel={<FormattedMessage {...messages.less} />}
          />
          
          {/** /Portfolio excerpt */}
          
          <hr />

          <SectionHeaderComponent title={<FormattedMessage {...messages.myWork} />} />
          {/** /Project filters */}

          <ProjectComponent 
            id="playsmatch" 
            image="/pm-showcase-1.png" 
            name="Cuádrala / Playsmatch"
            excerpt={<FormattedMessage {...messages.pmDescription} />}
            information={[
              { key: <FormattedMessage {...messages.client} />, value: 'Cuádrala / Playsmatch' },
              { key: <FormattedMessage {...messages.period} />, value: <FormattedMessage {...messages.pmPeriod} /> },
              { key: <FormattedMessage {...messages.workType} />, value: 'FullTime' },
              { key: <FormattedMessage {...messages.role} />, value: 'Full Stack Web Developer' },
              { key: <FormattedMessage {...messages.technologies} />, value: 'React / Nodejs' },
              { key: <FormattedMessage {...messages.companyWebsite} />, value: <a href="https://www.cuadrala.com">Cuádrala</a> }
            ]}
          />

          <ShowcaseComponent id="PlaysmatchShowcase" 
            title={<FormattedMessage {...messages.showcaseTitle} />} 
            elements={pmShowcase} 
            emptyStateText={<FormattedMessage {...messages.showcaseEmptyText} />} 
          />
          {/** /Playsmatch Project and showcase */}
          
          <ProjectComponent 
            id="systrix" 
            image="/Systrix/sys-3.jpg" 
            name="Systrix"
            excerpt={<FormattedMessage {...messages.sysDescription} />}
            information={[
              { key: <FormattedMessage {...messages.client} />, value: 'Systrix' },
              { key: <FormattedMessage {...messages.period} />, value: <FormattedMessage {...messages.sysPeriod} /> },
              { key: <FormattedMessage {...messages.workType} />, value: 'FullTime' },
              { key: <FormattedMessage {...messages.role} />, value: 'Full Stack Web Developer / Wordpress Developer / Frontend Team Leader' },
              { key: <FormattedMessage {...messages.technologies} />, value: 'Angular 2 / React/ Elixir / Phoenix / Elm' },
              { key: <FormattedMessage {...messages.companyWebsite} />, value: <a href="https://www.linkedin.com/company/systrix">Systrix</a> }
            ]}
          />

          <ShowcaseComponent 
            id="SystrixShowcase" 
            title={<FormattedMessage {...messages.showcaseTitle} />}
            columnCount="2" 
            elements={sysShowcase} 
          />
          {/** /Systrix Project and showcase */}

          <ProjectComponent 
            id="GE" 
            image="/GE/ge.jpeg" 
            name="Gente Excelente Venezuela"
            excerpt={<FormattedMessage {...messages.geDescription} />}
            information={[
              { key: <FormattedMessage {...messages.client} />, value: 'Gente Excelente Venezuela' },
              { key: <FormattedMessage {...messages.period} />, value: '2016' },
              { key: <FormattedMessage {...messages.workType} />, value: 'Freelancer' },
              { key: <FormattedMessage {...messages.role} />, value: 'Web Developer / Wordpress Consultant' },
              { key: <FormattedMessage {...messages.technologies} />, value: 'Wordpress / HTML / CSS / Javascript' },
              { key: <FormattedMessage {...messages.companyWebsite} />, value: <a href="http://gentexcelente.com">gentexcelente.com</a> }
            ]}
          />

          <ShowcaseComponent 
            id="GenteExcelenteVenezuelaShowcase" 
            title={<FormattedMessage {...messages.showcaseTitle} />} 
            emptyStateText="Soon" 
            elements={geShowcase}
            columnCount="2" 
          />
          {/** /Gente excelente project and showcase */}

          <ProjectComponent 
            id="ilc" 
            image="/ilc/ilc-main.jpg" 
            name="ILC Academy"
            excerpt={<FormattedMessage {...messages.ilcDescription} />}
            information={[
              { key: <FormattedMessage {...messages.client} />, value: 'ILC Academy' },
              { key: <FormattedMessage {...messages.period} />, value: <FormattedMessage {...messages.ilcPeriod} /> },
              { key: <FormattedMessage {...messages.workType} />, value: 'FullTime' },
              { key: <FormattedMessage {...messages.role} />, value: 'Web Developer / Wordpress Consultant / Project Leader' },
              { key: <FormattedMessage {...messages.technologies} />, value: 'Wordpress / jQuery / HTML / CSS' },
              { key: <FormattedMessage {...messages.companyWebsite} />, value: <a href="http://ilcacademy.com/">ilcacademy.com</a> }
            ]}
          />

          <ShowcaseComponent 
            id="ILCAcademyShowcase" 
            title={<FormattedMessage {...messages.showcaseTitle} />} 
            columnCount="2" 
            elements={ILCShowcase} 
          />
          {/** /ILC Academy Project and showcase */}

          <hr />
          <FooterComponent 
            contactMe={<FormattedMessage {...messages.contactMe} />}
            networks={networks}
            made={<FormattedMessage {...messages.made} />}
            inspiration={<FormattedMessage {...messages.inspiration} />}
          />

        </section>
      </IntlProvider>
    );
  }
};

export default PortfolioContainer;


