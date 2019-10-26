import styled from 'styled-components'

export const StyledTodoList = styled.section`
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	flex: 1;
	padding: 0 20px 0 25px;
	overflow-y: scroll;
	overflow-x: hidden;

	ul {
		flex: 1;
		width: 100%;
		margin: 0;
		list-style: none;
		padding: 0;

		li {
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			align-items: center;
			position: relative;
			font-size: 15px;
			margin: 15px 0;
			&:first-child {
				margin-top: 0;
			}
			&:last-child {
				margin-bottom: 0;
			}
			&.done {
				color: rgba(0, 0, 0, 0.4);
				input {
					color: rgba(0, 0, 0, 0.4);
				}
			}

			input.text {
				flex: 1;
				color: black;
				background: unset;
				margin: 0 5px;
				border: none;
				font-size: 13px;
				box-sizing: border-box;
				&:focus {
					outline: none;
				}
			}
			ion-icon {
				&:hover {
					cursor: pointer;
					transform: scale(1.2);
				}
			}
		}
	}
`
