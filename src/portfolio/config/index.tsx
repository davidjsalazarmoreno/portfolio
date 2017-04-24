// React
import * as React from 'react';

// React intl
import {FormattedMessage} from 'react-intl';

// Intl Messages
import {messages} from './../messages';

// Playsmatch

export const pmShowcase = [];


// Systrix

export const sysShowcase = [
  {
    type: 'image',
    url: 'assets/Systrix/sys-3.jpg',
    alt: (<FormattedMessage {...messages['sysShowcase-3']} />),
    id: 'sys-showcase-3'
  },
  {
    type: 'image',
    url: 'assets/Systrix/sys-4.jpg',
    alt: (<FormattedMessage {...messages['sysShowcase-1']} />),
    id: 'sys-showcase-4'
  },
  {
    type: 'youtube',
    url: 'Dr732zk-ltw',
    alt: (<FormattedMessage {...messages['sysShowcase-1']} />),
    id: 'sys-showcase-5'
  },
  {
    type: 'youtube',
    url: 'opDk68CFwLA',
    alt: (<FormattedMessage {...messages['sysShowcase-6']} />),
    id: 'sys-showcase-6'
  },
];

// GenteExcelente Venezuela
export const geShowcase = [
    {
    type: 'image',
    url: 'assets/GE/ge-1-web.jpeg',
    alt: (<FormattedMessage {...messages['geShowcase-1']} />),
    id: 'ge-showcase-1'
  }
]

// ILC Academy

export const ILCShowcase = [
  {
    type: 'youtube',
    url: 'igTVc5yygt8',
    alt: (<FormattedMessage {...messages['ilcShowcase-1']} />),
    id: 'ilc-showcase-1'
  },
  {
    type: 'youtube',
    url: 'AU-N8X3j7w8',
    alt:  (<FormattedMessage {...messages['ilcShowcase-2']} />),
    id: 'ilc-showcase-2'
  },
  {
    type: 'youtube',
    url: 'qoGVn7bbgFg',
    alt: (<FormattedMessage {...messages['ilcShowcase-3']} />),
    id: 'ilc-showcase-3'
  },
  {
    type: 'youtube',
    url: '21_bpODeA8s',
    alt: (<FormattedMessage {...messages['ilcShowcase-4']} />),
    id: 'ilc-showcase-4'
  },
  {
    type: 'image',
    url: 'assets/ilc/subscribe-1.jpg',
    alt: (<FormattedMessage {...messages['ilcShowcase-5']} />),
    id: 'ilc-showcase-5'
  },
  {
    type: 'image',
    url: 'assets/ilc/subscribe-2.jpg',
    alt: (<FormattedMessage {...messages['ilcShowcase-5']} />),
    id: 'ilc-showcase-6'
  },
  {
    type: 'image',
    url: 'assets/ilc/ilc-certificates-prototype.jpg',
    alt: (<FormattedMessage {...messages['ilcShowcase-7']} />),
    id: 'ilc-showcase-7'
  },
  {
    type: 'image',
    url: 'assets/ilc/ilc-welcome.jpg',
    alt: (<FormattedMessage {...messages['ilcShowcase-8']} />),
    id: 'ilc-showcase-8'
  },
];

// Others configurations
export const networks = [
  { url: 'https://twitter.com/davidjsmoreno', iconClassName: 'fa fa-twitter' , title: 'Twitter' },
  { url: 'https://github.com/davidjsalazarmoreno', iconClassName: 'fa fa-github' , title: 'Github' },
  { url: 'https://ve.linkedin.com/in/david-salazar-63500724', iconClassName: 'fa fa-linkedin' , title: 'Linkedin' },
  { url: 'https://medium.com/@davidjsmoreno', iconClassName: 'fa fa-medium' , title: 'Medium blog' },
  { url: 'skype:davidjsalazarmoreno@outlook.com?call', iconClassName: 'fa fa-skype' , title: 'Skype' },
];