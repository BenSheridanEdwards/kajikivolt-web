import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

const Heading = ({
    rank = 2,
    text,
    type = 'headline'
}) => {
    const Tag = rank > 6 ? 'h6' : `h${rank}`;
    const fill = "url(#pattern)"
    return (
        <div className="Heading">
          <svg width="100%" height="100%" viewBox="0 0 400 320">
            <defs>
              <pattern x="0" y="0" id="pattern" patternUnits="userSpaceOnUse" width="800" height="800" patternTransform="rotate(35)">
                <image width="800" height="800" xlinkHref="http://localhost:3000/img/background/gold-2.jpg"></image>
              <animateTransform attributeType="xml"
                        attributeName="patternTransform"
                        type="rotate" from="0" to="359" begin="0"
                        dur="2s" repeatCount="indefinite"/>
              </pattern>
            </defs>
            <text x="50%" y="75%" dominantBaseline="middle" alignmentBaseline="middle" textAnchor="middle" className="headline">{text}</text>
          </svg>
        </div>
    );
};

Heading.propTypes = {
    rank: PropTypes.oneOf([
        1,
        2,
        3,
        4,
        5,
        6
    ]),
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'headline',
        'subtitle',
        'title'
    ])
};

export default Heading;













/*
<svg>
<defs>
    <pattern id="wood" patternUnits="userSpaceOnUse" width="400" height="400" >
        <image xlink:href="http://subtlepatterns.com/patterns/purty_wood.png" width="400" height="400" />
    </pattern>
</defs>
<text y="1.2em">SVG rocks!</text>
</svg>




      <svg>
        <pattern id="pattern" patternUnits="userSpaceOnUse" width="750" height="800">
        <image width="750" height="800" xlinkHref="image.jpg"></image>
        </pattern>
        <text x="0" y="80" class={{`heading-${type}`}} style={{`fill:url(#pattern)`}}>{text}</text>
      </svg>
      *./


/*
<svg>
  <pattern id="pattern" patternUnits="userSpaceOnUse" width="750" height="800">
    <image width="750" height="800" xlink:href="image.jpg"></image>
  </pattern>
  <text x="0" y="80" class="headline" style="fill:url(#pattern);">background-clip: text | Polyfill</text>
</svg>
*/