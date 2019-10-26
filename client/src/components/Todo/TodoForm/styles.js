import styled from 'styled-components'

export const StyledForm = styled.section`
	margin: 0 25px 20px;

	div.form {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 25px;
		padding-bottom: 9px;
		box-sizing: border-box;
		border-bottom: 1px solid black;

		input {
			flex: 1;
			border: none;
			outline: none;
		}
	}
	div.error {
		color: red;
		font-size: 10px;
		padding: 5px 0;
	}
	input {
		border: none;
	}
`
