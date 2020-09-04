import { css, SerializedStyles } from '@emotion/core';
import Theme from 'Theme';

const styles = (open: boolean): SerializedStyles => css`
	padding: 20px 10%;

	${Theme.mediaQueries.desktop} {
		flex: 1;
		background-color: ${Theme.colours.lightGrey};
		padding: 80px 40px;
	}

	.indicator {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		border-bottom: 1px solid ${Theme.colours.lightGrey};

		.step {
			font-weight: bold;
			width: 60px;
			display: flex;
			flex-direction: column;

			label {
				padding: 0 4px;

				span {
					color: ${Theme.colours.primary};
				}
			}

			progress {
				width: 100%;
			}
		}

		.dropdown {
			background: transparent;
			padding: 20px;
		}

		${Theme.mediaQueries.desktop} {
			position: absolute !important;
			height: 1px;
			width: 1px;
			overflow: hidden;
			clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
			clip: rect(1px, 1px, 1px, 1px);
			white-space: nowrap; /* added line */
		}
	}

	ol {
		counter-reset: count;
		list-style: none;
		padding: 0;
		display: ${open ? 'block' : 'none'};

		${Theme.mediaQueries.desktop} {
			display: block;
			border-bottom: none;
		}

		li {
			margin-bottom: 10px;
			color: ${Theme.colours.dark};
			text-align: left;
			height: 30px;
			display: flex;
			align-items: center;

			.step {
				width: 30px;
				height: 30px;
				margin-right: 12px;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid ${Theme.colours.primary};
				border-radius: 50%;
			}

			&.current {
				color: black;
				font-weight: bold;

				.step {
					color: white;
					background-color: ${Theme.colours.primary};
				}
			}

			&.complete {
				font-weight: bold;

				button {
					text-align: left;
					background: transparent;
					border: none;
					color: ${Theme.colours.primary};
					padding: 0;
					width: 100%;
					height: 100%;

					&:active {
						border: none;
					}
				}

				.step {
					border: none;
				}

				.tick {
					display: block;
				}
			}
		}
	}
`;

export default styles;
