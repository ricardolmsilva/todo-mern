import styled from 'styled-components'

export const StyledMenu = styled.nav`
	width: 100%;
	text-align: center;
	margin-bottom: 30px;

	> ul {
		margin: 0;
		padding: 0 0 15px 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;

		&::after {
			content: ' ';
			width: 50px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.25);
			position: absolute;
			bottom: 0px;
		}

		> .nav-item {
			list-style: none;
			padding: 0 5px;
			transition: 0.3s;

			> .nav-link {
				color: rgba(0, 0, 0, 0.25);
				text-decoration: unset;
				&:hover {
					color: rgba(0, 0, 0, 0.6);
				}
				&.active {
					color: black;
				}
			}
		}
	}
`
