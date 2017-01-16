// React
import * as React from 'react';

// React intl
import {defineMessages} from 'react-intl';

export const messages = defineMessages({
  excerptShort: {
    id: 'excerpt.short',
    defaultMessage: `Hi, I'm Software Developer, currently at {currently}, you can see the technologies and approaches that 
                I have worked in {attention} or visit {blog} to know some of my thoughts,`,
    values: {
      currently: <a href="https://www.cuadrala.com/es/">Cuadrala</a>,
      blog: <a href="http://davidjsmoreno.com.ve/">my blog</a>,
      attention: <b>my projects section right below</b>
    }
  },
  excerptLong: {
    id: 'excerpt.long',
    defaultMessage: `{long},`,
    values: {
      long: <span>
              Hi, I'm Software Developer, currently at <a href="https://www.cuadrala.com/es/">Cuadrala</a>, I have experience with several web technologies like  <code>Javascript</code>, <code>HTML</code>, 
              <code>CSS</code> and <code>PHP</code>, I have worked on both backend and frontend but spent more of the time working with the last one.

              Recently I has been immerse in <code>NodeJS</code>, <code>React</code> and  <code>Functional Programming</code>,
              you can see the other technologies and approaches that I have worked in <b>my projects section right below</b> or
              visit <a href="http://davidjsmoreno.com.ve/">my blog</a> to know some of my thoughts
            </span> 
    }
  },
  client: {
    id: 'general.client',
    defaultMessage: 'Client'
  },
  period: {
    id: 'general.period',
    defaultMessage: 'Period'
  },
  workType: {
    id: 'general.workType',
    defaultMessage: 'Work Type'
  },
  role: {
    id: 'general.role',
    defaultMessage: 'role'
  },
  technologies: {
    id: 'general.technologies',
    defaultMessage: 'Technologies used'
  },
  companyWebsite: {
    id: 'general.companyWebsite',
    defaultMessage: 'Company Website'
  },
  showcaseTitle: {
    id: 'general.showcaseTitle',
    defaultMessage: 'Showcase'
  },
  showcaseEmptyText: {
    id: 'general.showcaseEmptyText',
    defaultMessage: 'Soon (Work in progress ;-D)'
  },
  myWork: {
    id: 'general.myWorkTitle',
    defaultMessage: 'My Work'
  },
  pmTitle: {
    id: 'pm.title',
    defaultMessage: 'Playsmatch'
  },
  pmDescription: {
    id: 'pm.description',
    defaultMessage: 'Playsmatch is a reservation and payment management system for sports complexes, which seeks to eliminate all the flaws and difficulties that have a moment of renting a court for both users and administrators.'
  },
  pmPeriod: {
    id: 'pm.period',
    defaultMessage: 'June 2016 - Currently'
  },
  sysDescription: {
    id: 'sys.description',
    defaultMessage: 'Web development, media agency and call center outsourcing.'
  },
  sysPeriod: {
    id: 'sys.period',
    defaultMessage: 'January 2016 - May 2016'
  },
  geDescription: {
    id: 'ge.description',
    defaultMessage: 'We are Gente Excelente Venezuela. Our mission is the success of People. Our motto Saving in readiness is to invest in ignorance. Life Coaching.'
  },
  ilcDescription: {
    id: 'ilc.description',
    defaultMessage: 'ILC Academy, a platform for expanding awareness, knowledge and skills to enhance your attributes like LifeCoach.'
  },
  contactMe: {
    id: 'general.contactMe',
    defaultMessage: 'Contact me'
  },
  language: {
    id: 'general.language',
    defaultMessage: 'Language'
  },
  made: {
    id: 'general.made',
    defaultMessage: 'Made with {love} and React.js',
    values: {
      love: <i className="fa fa-heart" title="Love" />
    }
  },
  inspiration: {
    id: 'general.inspiration',
    defaultMessage: 'The styles are inspired by {link}',
    values: {
      link: <a href="http://www.hamvocke.com/">hamvocke</a> 
    }
  },
});