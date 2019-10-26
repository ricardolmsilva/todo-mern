import styled from 'styled-components'

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

*{
  margin: 0;
  padding: 0;
  outline:0;
  font-family: "Lato", "Roboto", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,
body,
#root {
  height: 100%;
}
`

export const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: #fccb90;
	background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);

	*::-webkit-scrollbar {
		width: 5px !important;
	}
	*::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0) !important;
	}
	*::-webkit-scrollbar-thumb {
		background-color: black !important;
	}

	.content {
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;

		position: relative;
		width: 360px;
		min-width: 360px;
		height: 60vh;
		min-height: 350px;
		margin: 40px;
		padding: 25px 0;
		background-color: white;
		border-radius: 10px;
		-webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.21);
		box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.21);
	}
`

export const Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-radius: none;
	border-bottom: 1px solid black;
	margin: 15px 0;
	padding-bottom: 9px;
	box-sizing: border-box;
`

export const Icon = styled.span`
	ion-icon {
		font-size: 20px;
		&:hover {
			cursor: pointer;
			transform: scale(1.2);
		}
	}
`
export const StyledForm = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;

	form {
		padding: 0 40px;
		input {
			-webkit-appearance: none;
			border-radius: 0;
			box-sizing: border-box;
		}
		input[type='submit'] {
			padding: 0;
			margin-top: 45px;
			background: transparent;
			width: 280px;
			height: 45px;
			text-transform: uppercase;
			font-size: 15px;
			border-radius: 5px;
			border: 1px solid rgba(0, 0, 0, 0.25);
			outline: none;
			:hover {
				cursor: pointer;

				border: 1px solid rgba(0, 0, 0, 0.4);
			}
			:active {
				border: 1px solid rgba(0, 0, 0, 0.8);
			}
		}
		div,
		span {
			color: red;
			font-size: 12px;
		}
	}
`
