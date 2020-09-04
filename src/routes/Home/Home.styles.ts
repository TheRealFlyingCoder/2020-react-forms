import { css } from '@emotion/core';
import Theme from 'Theme';

export default css`
	display: flex;
	flex-direction: column;

	${Theme.mediaQueries.desktop} {
		flex-direction: row;
	}

	.form-window {
		padding: 20px 10%;

		display: flex;
		margin-top: 30px;
		flex: 3;

		h2 {
			margin: 0;
		}

		.form-step {
			display: none;

			&.active {
				display: block;
			}
		}

		.field-element {
			display: flex;
			flex-direction: column;
			margin-bottom: 20px;
			position: relative;

			&.checkbox {
				flex-direction: row;
				align-items: center;

				input {
					width: 24px;
					background-color: ${Theme.colours.primary};
					border-radius: 4px;
				}

				label {
					height: 100%;
					margin-left: 20px;
				}
			}

			label {
				margin-bottom: 8px;
				font-weight: 600;
				font-size: 14px;
			}

			select,
			textarea,
			input {
				border-radius: 4px;
				border: 1px ${Theme.colours.borders} solid;

				&[aria-invalid='true'] {
					border-color: red;

					&:focus {
						outline-color: red;
					}
				}
			}

			select,
			input {
				padding-left: 10px;
				height: 50px;
			}

			textarea {
				padding: 10px;
			}

			.field-error {
				color: red;
				font-size: 12px;
				margin-top: 4px;
			}
		}
	}
`;
