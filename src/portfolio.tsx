// React
import * as React from 'react';

// React intl
import {FormattedMessage} from 'react-intl';

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

import {messages} from './messages';

import './portfolio.scss';

const pmShowcase = [];

const ILCShowcase = [
  {
    type: 'youtube',
    url: 'igTVc5yygt8',
    alt: (<p>
     <b>Wordpress plugin video inside the web</b>: This wordpress plugin allows the user to play the links of youtube and vimeo directly inside the web with the help of the fancybox library.
    </p>),
    id: 'ilc-showcase-2'
  },
  {
    type: 'youtube',
    url: 'AU-N8X3j7w8',
    alt: 'Application Wheel of Life: It is a tool used in the world of coaching but taken to web application, with it you can create wheel life charts, save wheels, associate a customer with a wheel and generate a report in a PDF document.',
    id: 'ilc-showcase-3'
  },
  {
    type: 'youtube',
    url: 'qoGVn7bbgFg',
    alt: 'Small design of a contact page, with the button to call via skype.',
    id: 'ilc-showcase-4'
  },
  {
    type: 'youtube',
    url: '21_bpODeA8s',
    alt: 'Modification to budypress directory (Wordpress plugin): Basically the directory was modified to show specific roles of wordpress, depending on those roles apply CSS styles (the medallion on the right) in addition to adding these new roles to the filters to refine the users search .',
    id: 'ilc-showcase-5'
  },
  {
    type: 'image',
    url: '/ilc/subscribe-1.jpg',
    alt: 'Design of the landing page parallax, in this project I made the design and the layout, as well as applying the parallax effect with the library skroll.js',
    id: 'ilc-showcase-1'
  },
  {
    type: 'image',
    url: '/ilc/subscribe-2.jpg',
    alt: 'Design of the landing page parallax, in this project I made the design and the layout, as well as applying the parallax effect with the library skroll.js',
    id: 'ilc-showcase-1'
  },
  {
    type: 'image',
    url: '/ilc/ilc-certificates-prototype.jpg',
    alt: 'Design of the landing page parallax, in this project I made the design and the layout, as well as applying the parallax effect with the library skroll.js',
    id: 'ilc-showcase-1'
  },
  {
    type: 'image',
    url: '/ilc/ilc-welcome.jpg',
    // width: 'auto',
    // height: '700px',
    alt: 'Design of the landing page parallax, in this project I made the design and the layout, as well as applying the parallax effect with the library skroll.js',
    id: 'ilc-showcase-1'
  },
];


export const networks = [
  { url: 'https://twitter.com/davidjsmoreno', iconClassName: 'fa fa-twitter' , title: 'Twitter' },
  { url: 'https://github.com/davidjsalazarmoreno', iconClassName: 'fa fa-github' , title: 'Github' },
  { url: 'https://ve.linkedin.com/in/david-salazar-63500724', iconClassName: 'fa fa-linkedin' , title: 'Linkedin' },
  { url: 'http://davidjsmoreno.com.ve/', iconClassName: 'fa fa-wordpress' , title: 'Wordpress blog' }
];

export class PortfolioComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="PortfolioComponent">
        <LanguageSelectorComponent />
        
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
          image="./assets/pm-showcase-1.png" 
          name="Cuádrala / Playsmatch"
          excerpt="Playsmatch is a reservation and payment management system for sports complexes, which seeks to eliminate all the flaws and difficulties that have a moment of renting a court for both users and administrators."
          information={{
            'Client': 'Playsmatch',
            'Period': 'June 2016 - Currently',
            'Work Type': 'FullTime',
            'Role': 'Full Stack Web Developer',
            'Technologies used': 'React / Nodejs',
            'Company Website': <a href="https://www.cuadrala.com">Cuádrala</a>
          }}
        />


        <ShowcaseComponent id="PlaysmatchShowcase" title="Showcase" elements={pmShowcase} emptyStateText="Soon (Work in progress ;-D)" />
        {/** /Playsmatch Project and showcase */}
        
        <ProjectComponent 
          id="systrix" 
          image="/Systrix/sys-3.jpg" 
          name="Systrix"
          excerpt="Web development, media agency and call center outsourcing."
          information={{
            'Client': 'Systrix',
            'Period': 'January 2016 - May 2016',
            'Work Type': 'FullTime',
            'Role': 'Full Stack Web Developer / Wordpress Developer / Frontend Team Leader',
            'Technologies used': 'Angular 2 / React/ Elixir / Phoenix / Elm',
            'Company Website': <a href="https://www.linkedin.com/company/systrix">Systrix</a> 
          }}
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
          information={{
            'Client': 'Gente Excelente Venezuela',
            'Period': '2016',
            'Work Type': 'Freelancer',
            'Role': 'Web Developer / Wordpress Consultant',
            'Technologies used': 'Wordpress / HTML / CSS / Javascript',
            'Company Website': <a href="http://gentexcelente.com">gentexcelente.com</a>
          }}
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
          information={{
            'Client': 'ILC Academy',
            'Period': 'January 2013 - January 2015',
            'Work Type': 'FullTime',
            'Role': 'Web Developer / Wordpress Consultant / Project Leader',
            'Technologies used': 'Wordpress / jQuery',
            'Company Website': <a href="http://ilcacademy.com/">ilcacademy.com</a>
          }}
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
    );
  }
};

export default PortfolioComponent;


