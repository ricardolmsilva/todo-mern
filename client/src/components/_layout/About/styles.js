import styled from 'styled-components'

export const StyledAbout = styled.section`
	font-size: 13px;
	text-align: justify;
	padding: 0 20px 0 25px;
	line-height: 25px;
	overflow-y: scroll;
	overflow-x: hidden;

	p {
		margin: 0px;
	}

	h4 {
		text-align: center;
	}

	div.logos {
		margin-top: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		img {
			width: 40px;
		}
	}
`
