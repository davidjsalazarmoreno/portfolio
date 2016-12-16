// React
import React from 'react';

require('./../node_modules/normalize.css/normalize.css');
require('./devfolio.scss');

// Components
import {FlatSeparatorComponent} from './flat-separator/flat-separator';
import {ShowcaseComponent} from './showcase/showcase';
import {HeaderComponent} from './header/header';
import {ExcerptComponent} from './excerpt/excerpt';
import {FiltersComponent} from './filters/filters';
import {ProjectComponent} from './project/project';
import {SocialComponent} from './social/social';

// WP consultant

const playsmatchShowcase = [
  {
    type: 'image',
    url: '/pm-showcase-1.png',
    id: 'pm-showcase-1'
  },
  {
    type: 'image',
    url: '/pm-showcase-1.png',
    id: 'pm-showcase-2'
  },
  {
    type: 'image',
    url: '/pm-showcase-1.png',
    id: 'pm-showcase-3'
  },
  {
    type: 'image',
    url: '/pm-showcase-1.png',
    id: 'pm-showcase-4'
  },
  {
    type: 'youtube',
    url: 'YAKTlImnS-g',
    id: 'youtube-1'
  },


];

export const networks = [
  { url: 'https://twitter.com/davidjsmoreno', iconClassName: 'fa fa-twitter' , title: 'Twitter' },
  { url: 'https://github.com/davidjsalazarmoreno', iconClassName: 'fa fa-github' , title: 'Github' },
  { url: 'https://ve.linkedin.com/in/david-salazar-63500724', iconClassName: 'fa fa-linkedin' , title: 'Linkedin' },
  { url: 'http://davidjsmoreno.com.ve/', iconClassName: 'fa fa-wordpress' , title: 'Wordpress blog' }
];



export class DevfolioComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="DevfolioComponent">

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
          name="Cuádrala"
          excerpt="I work as a full stack web developer blah blah blah"
          information={{
            'Client': 'Playsmatch',
            'Period': 'June 2016 - Currently',
            'Work Type': 'FullTime',
            'Role': 'Full Stack Web Developer',
            'Technologies used': 'React / Nodejs',
            'Company Website': 'Cuadrala.com'
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
            'Technologies used': 'Angular 2 / Elixir / Phoenix / Elm',
            'Company Website': 'Systrix'
          }}
        />

        <ShowcaseComponent id="SystrixShowcase" title="Showcase" emptyStateText="Soon" elements={[]} />
        {/** /Systrix Project and showcase */}

        <ProjectComponent 
          id="ilc" 
          image="http://placehold.it/780x480" 
          name="ILC Academy"
          excerpt="I work as a full stack web developer blah blah blah"
          information={{
            'Client': 'ILC Academy',
            'Period': 'January 2013 - January 2015',
            'Work Type': 'FullTime',
            'Role': 'Web Developer / Project Leader',
            'Technologies used': 'Wordpress / jQuery',
            'Company Website': 'http://ilcacademy.com/'
          }}
        />

        <ShowcaseComponent id="ILCAcademyShowcase" title="Showcase" emptyStateText="Soon" elements={[]} />
        {/** /ILC Academy Project and showcase */}

        <hr />
        <footer>
          <p>
            <a href="mailto:davidjsalazarmoreno@gmail.com?subject=Awesome%20Project">
              <i className="fa fa-envelope-o"></i>
              <br/>
              Contact me
            </a>
          </p>
          
          <FlatSeparatorComponent margin="8px auto" width="13%" />

          <small className="footnote">
            <a href="">
              Made with <i className="fa fa-heart" title="Love" /> and Devolio.js
            </a>
          </small>

          <SocialComponent id="SocialsOnFooter" networks={networks} />
        </footer>
        
      </section>
    );
  }
};

export default DevfolioComponent;