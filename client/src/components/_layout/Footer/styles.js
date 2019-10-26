import styled from 'styled-components'

export const StyledFooter = styled.footer`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	margin-top: 30px;
	padding: 0 20px;
	font-size: 10px;
	color: rgba(0, 0, 0, 0.4);

	span.credits {
		grid-area: 1 / 2 / 2 / 3;
		justify-self: center;
		align-self: center;
		a {
			color: rgba(0, 0, 0, 0.4);
			:hover {
				color: black;
			}
			:visited {
				color: rgba(0, 0, 0, 0.4);
			}
		}
	}

	span.icon {
		grid-area: 1 / 3 / 2 / 4;
		justify-self: right;
		align-self: center;
		color: black;
		ion-icon {
			cursor: pointer;
			right: 0;
		}
	}
`
