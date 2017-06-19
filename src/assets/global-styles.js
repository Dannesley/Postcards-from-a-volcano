import { injectGlobal } from 'styled-components';

import latoRegularWoff2 from './fonts/lato-v13-latin-regular.woff2';
import latoRegularWoff from './fonts/lato-v13-latin-regular.woff';
import latoRegularTruetype from './fonts/lato-v13-latin-regular.ttf';

import lato700Woff2 from './fonts/lato-v13-latin-700.woff2';
import lato700Woff from './fonts/lato-v13-latin-700.woff';
import lato700Truetype from './fonts/lato-v13-latin-700.ttf';

import openSansWoff2 from './fonts/open-sans-v13-latin-regular.woff2';
import openSansWoff from './fonts/open-sans-v13-latin-regular.woff';
import openSansTruetype from './fonts/open-sans-v13-latin-regular.ttf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
	@font-face {
		font-family: 'Lato';
		src: url(${latoRegularWoff2}) format('woff2'),
			url(${latoRegularWoff}) format('woff'),
			url(${latoRegularTruetype}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'LatoBold';
		src: url(${lato700Woff2}) format('woff2'),
			url(${lato700Woff}) format('woff'),
			url(${lato700Truetype}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'OpenSans';
		src: url(${openSansWoff2}) format('woff2'),
			url(${openSansWoff}) format('woff'),
			url(${openSansTruetype}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	html {
		height:100%;
	}

	body {
		min-height:100%;
		font-family: 'Lato';
		color: #FFF;
	}

	p {
		margin: 0;
	}
`;