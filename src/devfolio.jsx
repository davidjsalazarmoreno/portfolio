// React
import React from 'react';

require('./../node_modules/normalize.css/normalize.css');
require('./devfolio.scss');

// Components
import {FlatSeparatorComponent} from './flat-separator/flat-separator';
import {ShowcaseComponent} from './showcase/showcase';

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

export class DevfolioComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="DevfolioComponent">
        <header className="HeaderComponent">
          <h1 className="title">
            David Salazar
          </h1>

          {/**<p className="HeaderText">
            <code>let WebDeveloper = Javascript + Nodejs + Php + Love;</code>
          </p> */}
          <img className="HeaderAvatar" src="/avatar.jpg" width="150" height="150" alt="Avatar" />
          <div className="SocialComponent">
            <span>
              <a href="https://twitter.com/davidjsmoreno">
                <i className="fa fa-twitter" title="Twitter"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/davidjsalazarmoreno">
                <i className="fa fa-github" title="Github"></i>
              </a>
            </span>
            <span>
              <a href="https://ve.linkedin.com/in/david-salazar-63500724">
                <i className="fa fa-linkedin" title="Linkedin"></i>
              </a>
            </span>
            <span>
              <a href="http://davidjsmoreno.com.ve/">
                <i className="fa fa-wordpress" title="Wordpress blog"></i>
              </a>
            </span>
          </div>
        </header>
        {/** /Portfolio Header */}

        <FlatSeparatorComponent margin="16px auto" width="20%" />

        <article className="ExcerptComponent">
          <p className="description">
            Hi, I'm Software Developer, currently at <a href="cuadrala.com">Cuadrala</a>, I have experience with several web technologies like  <code>Javascript</code>, <code>HTML</code>, 
            <code>CSS</code> and <code>PHP</code>, I have worked on both backend and frontend but spent more of the time working with the last one.

             Recently I has been immerse in <code>NodeJS</code>, <code>React</code> and  <code>Functional Programming</code>,
             you can see the other technologies and approaches that I have worked in  <a href="">my projects section</a> or
             visit <a href="">my blog</a> to know some of my thoughts. 
          </p>
          {/*<button className="hireme">Contact me</button>*/}
        </article>
        <hr />
        {/** /Portfolio excerpt */}

        <div className="FiltersComponent">
          <h1>Projects</h1>
          <FlatSeparatorComponent margin="0 0" width="20%" />
          {/*<div>
            <span>All</span>
            <span>Professionals</span>
            <span>Personals</span>
          </div>*/}
        </div>
        {/** /Project filters */}

        <div className="ProjectsComponent">
          <div className="main-project-image">
            <img src="/pm-showcase-1.png" width="780" alt=""/>
          </div>

          <p className="ProjectExcerpt">
            <h2 className="ProjectName">Cuádrala</h2>
            I work as a full stack web developer blah blah blah
            <ul className="ProjectInformation">
              <li><b>Client:</b> Playsmatch </li>
              <li><b>Period:</b> June 2016 - Currently </li>
              <li><b>Work Type:</b> FullTime </li>
              <li><b>Role:</b> Full Stack Web Developer </li>
              <li><b>Technologies used:</b> React / Nodejs </li>
              <li><b>Company Website:</b> <a href="cuadrala.com">Cuadrala.com</a> </li>
            </ul>
          </p>

        </div>

        <ShowcaseComponent id="PlaysmatchShowcase" title="Showcase" elements={playsmatchShowcase} />
        {/** /Playsmatch Project and showcase */}

        <div className="ProjectsComponent">
          <div className="main-project-image">
            <img src="http://placehold.it/780x480" width="780" alt=""/>
          </div>

          <p className="ProjectExcerpt">
            <h2 className="ProjectName">Systrix</h2>
            I work as a full stack web developer blah blah blah
            <ul className="ProjectInformation">
              <li><b>Client:</b> Systrix </li>
              <li><b>Period:</b> January 2016 - May 2016 </li>
              <li><b>Work Type:</b> FullTime </li>
              <li><b>Role:</b> Full Stack Web Developer / Frontend Team Leader </li>
              <li><b>Technologies used:</b> Angular 2 / Elixir / Phoenix / Elm </li>
              <li><b>Company Website:</b> <a href="https://www.linkedin.com/company/1772943?trk=prof-exp-company-name">Systrix</a> </li>
            </ul>
          </p>

        </div>

        <ShowcaseComponent id="SystrixShowcase" title="Showcase" emptyStateText="Soon" elements={[]} />
        {/** /Systrix Project and showcase */}

        <div className="ProjectsComponent">
          <div className="main-project-image">
            <img src="http://placehold.it/780x480" width="780" alt=""/>
          </div>

          <p className="ProjectExcerpt">
            <h2 className="ProjectName">ILC Academy</h2>
            I work as a full stack web developer blah blah blah
            <ul className="ProjectInformation">
              <li><b>Client:</b> ILC Academy </li>
              <li><b>Period:</b> January 2013 - January 2015 </li>
              <li><b>Work Type:</b> FullTime </li>
              <li><b>Role:</b> Web Developer / Project Leader </li>
              <li><b>Technologies used:</b> Wordpress / jQuery </li>
              <li><b>Company Website:</b> <a href="http://ilcacademy.com/">http://ilcacademy.com/</a> </li>
            </ul>
          </p>

        </div>

        <ShowcaseComponent id="ILCAcademyShowcase" title="Showcase" emptyStateText="Soon" elements={[]} />
        {/** /ILC Academy Project and showcase */}

        <hr />
        <footer>
          {/*<button className="hireme">
            Contact me
          </button>*/}
          {/*<div className="heroImage">
            <i></i>
          </div>*/}
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
          <div className="SocialComponent">
            <span>
              <a href="https://twitter.com/davidjsmoreno">
                <i className="fa fa-twitter" title="Twitter"></i>
              </a>
            </span>
            <span>
              <a href="https://github.com/davidjsalazarmoreno">
                <i className="fa fa-github" title="Github"></i>
              </a>
            </span>
            <span>
              <a href="https://ve.linkedin.com/in/david-salazar-63500724">
                <i className="fa fa-linkedin" title="Linkedin"></i>
              </a>
            </span>
            <span>
              <a href="http://davidjsmoreno.com.ve/">
                <i className="fa fa-wordpress" title="Wordpress blog"></i>
              </a>
            </span>
          </div>
        </footer>
        
      </section>
    );
  }
};

export default DevfolioComponent;