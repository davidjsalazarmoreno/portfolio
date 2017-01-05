// React
import React from 'react';

require('./../node_modules/normalize.css/normalize.css');
require('./portfolio.scss');

// Components
import {FlatSeparatorComponent} from './flat-separator/flat-separator';
import {ShowcaseComponent} from './showcase/showcase';
import {HeaderComponent} from './header/header';
import {ExcerptComponent} from './excerpt/excerpt';
import {FiltersComponent} from './filters/filters';
import {ProjectComponent} from './project/project';
import {SocialComponent} from './social/social';
import {FooterComponent} from './footer/footer';


const playsmatchShowcase = [
  {
    type: 'image',
    url: 'http://placehold.it/780x480',
    alt: 'Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment ',
    id: 'pm-showcase-1'
  },
  {
    type: 'image',
    url: 'http://placehold.it/800x600',
    alt: 'Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment ',
    id: 'pm-showcase-1'
  },
  {
    type: 'image',
    url: 'http://placehold.it/1280x720',
    alt: 'Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment ',
    id: 'pm-showcase-1'
  },
  {
    type: 'image',
    url: 'http://placehold.it/780x480',
    alt: 'Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment Test comment ',
    id: 'pm-showcase-1'
  },

  {
    type: 'image',
    url: 'http://placehold.it/300x350',
    alt: 'Test comment',
    id: 'pm-showcase-2'
  },
  {
    type: 'image',
    url: 'http://placehold.it/1800x760',
    alt: 'Test comment',
    id: 'pm-showcase-3'
  },
  {
    type: 'image',
    url: 'http://placehold.it/300x350',
    alt: 'Test comment',
    id: 'pm-showcase-4'
  },
  {
    type: 'youtube',
    url: 'YAKTlImnS-g',
    alt: 'Test comment',
    id: 'youtube-1'
  },
];

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

export class PortfolioComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="PortfolioComponent">
        <HeaderComponent />
        {/** /Header excerpt */}
        <FlatSeparatorComponent margin="16px auto" width="20%" />

        <ExcerptComponent />
        {/** /Portfolio excerpt */}
        
        <hr />

        <FiltersComponent />
        {/** /Project filters */}

        <ProjectComponent 
          id="playsmatch" 
          image="/pm-showcase-1.png" 
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


        <ShowcaseComponent id="PlaysmatchShowcase" title="Showcase" elements={playsmatchShowcase} />
        {/** /Playsmatch Project and showcase */}
        

        <ProjectComponent 
          id="systrix" 
          image="http://placehold.it/780x480" 
          name="Systrix"
          excerpt="I work as a full stack web developer blah blah blah"
          information={{
            'Client': 'Systrix',
            'Period': 'January 2016 - May 2016',
            'Work Type': 'FullTime',
            'Role': 'Full Stack Web Developer / Frontend Team Leader',
            'Technologies used': 'Angular 2 / React/ Elixir / Phoenix / Elm',
            'Company Website': <a href="https://www.linkedin.com/company/systrix">Systrix</a> 
          }}
        />

        <ShowcaseComponent id="SystrixShowcase" title="Showcase" emptyStateText="Soon" elements={[]} />
        {/** /Systrix Project and showcase */}

        <ProjectComponent 
          id="GE" 
          image="http://placehold.it/780x480" 
          name="Gente Excelente Venezuela"
          excerpt="I work as a full stack web developer blah blah blah"
          information={{
            'Client': 'Gente Excelente Venezuela',
            'Period': 'January 2013 - January 2015',
            'Work Type': 'Freelancer',
            'Role': 'Web Developer / Wordpress Consultant',
            'Technologies used': 'Wordpress / HTML / CSS / Javascript',
            'Company Website': <a href="http://gentexcelente.com">gentexcelente.com</a>
          }}
        />

        <ShowcaseComponent id="GenteExcelenteVenezuelaShowcase" title="Showcase" emptyStateText="Soon" elements={[]} />
        {/** /Gente excelente project and showcase */}

        <ProjectComponent 
          id="ilc" 
          image="/ilc/ilc-main.jpg" 
          name="ILC Academy"
          excerpt="I work as a full stack web developer blah blah blah"
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


