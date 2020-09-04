const breakpoints = {
	small: 640,
	medium: 768, //ipad portrait
	large: 1023, //ipad landscape
	xlarge: 1244, //1280px screen resolution minus scrollbars
	xxlarge: 1410, // 1440px screen resolution minus scrollbars
};

const Theme = {
	colours: {
		primary: '#61DBFB',
		secondary: '#32323C',
		dark: '#43474E',
		grey: '#999999',
		offWhite: '#D1D1D1',
		white: '#FAFAFA',
		lightGrey: '#ECECEC',
		borders: '#707274'
	},
	breakpoints,
	mediaQueries: {
		desktop: `@media screen and (min-width: ${breakpoints.large}px)`,
		xlarge: `@media screen and (min-width: ${breakpoints.xlarge}px)`,
	},
	layers: {
		header: 10,
	},
}

export default Theme;