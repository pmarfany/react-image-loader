import styled, {css} from "styled-components/macro";
import AccentButton from "../RoundButton/AccentButton";
import GrayButton from "../RoundButton/GrayButton";
import defaultBackground from '../../assets/picture.svg';
import add from '../../assets/add.svg';
import edit from '../../assets/edit.svg';
import close from '../../assets/close.svg';
import {Store} from "../../Redux/types";

const BeforeIcon = (icon: string, size: string) => css`
  &:before {
    content: '';
    position: absolute;
    background: url(${icon}) no-repeat center center;
    background-size: ${size};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const StyledPicker = styled('div')<Store>`
  position: relative;
	width: 300px;
	height: 300px;
	border: 1px solid ${({theme}) => theme.colors.black};

	background:
	  url(${(props) => props.image ? props.image : defaultBackground})
    no-repeat
    center center;
  background-size: contain;
  background-color: ${({theme}) => theme.colors.gray};
  
  ${AccentButton} {
    position: absolute;
		bottom: -22px;
		right: 15px;
		width: 45px;
		height: 45px;
		
		box-shadow: 0 0.2em 0.4em rgba(0,0,0,0.4);
		
		${(props) => BeforeIcon(props.image ? edit : add, '1rem')}
  }
  
  ${GrayButton} {
    position: absolute;
		top: 5px;
		right: 5px;
		width: 35px;
		height: 35px;
		
		${BeforeIcon(close, '0.85rem')}
  }
  
  input[type="file"] { display: none; }
`;

export default StyledPicker;
