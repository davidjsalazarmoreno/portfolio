// React
import React from 'react';

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
    id: 'excerpt.short',
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
  }
});