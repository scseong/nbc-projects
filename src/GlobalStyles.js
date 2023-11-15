import { createGlobalStyle } from 'styled-components';
import PyeongChangPeaceLight from 'assets/fonts/PyeongChangPeace-Light.woff2';
import PyeongChangPeaceBold from 'assets/fonts/PyeongChangPeace-Bold.woff2';

const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    /* font-family: 'Noto Sans KR', sans-serif; */
	background: linear-gradient(185deg, rgba(0,150,199,1) 0%, rgba(0,180,216,1) 25%, rgba(72,202,228,1) 51%, rgba(144,224,239,1) 76%, rgba(173,232,244,1) 100%);
    -ms-overflow-style: none; 
    scrollbar-width: none; 
}
ol, ul, li {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
    text-decoration: none;
    color: inherit;
}  
input, button, textarea{
    border: none;
    background: inherit;
    font-family: 'PyeongChangPeace', sans-serif;
	outline: none;
} 
* { 
    box-sizing: border-box;
}
body::-webkit-scrollbar {
  display: none;
}
#root {
	max-width: 1400px;
	margin: 0 auto;
}
@font-face {
	font-family: 'PyeongChangPeace';
	src: url(${PyeongChangPeaceLight}) format('woff2');
	font-weight: 300;
}
@font-face {
	font-family: 'PyeongChangPeace';
	src: url(${PyeongChangPeaceBold}) format('woff2');
	font-weight: 700;
}
body {
	font-family: 'PyeongChangPeace';
}
`;

export default GlobalStyles;
