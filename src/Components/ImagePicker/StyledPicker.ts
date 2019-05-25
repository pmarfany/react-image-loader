import styled from "styled-components/macro";
import AccentButton from "../Button/AccentButton";
import GrayButton from "../Button/GrayButton";
import defaultBackground from '../../assets/picture.svg';
import {IStyledPicker} from "./BaseImagePicker";

const StyledPicker = styled('div')<IStyledPicker>`
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
  }
  
  ${GrayButton} {
    position: absolute;
		top: 5px;
		right: 5px;
		width: 35px;
		height: 35px;
  }
  
  input[type="file"] { display: none; }
`;

export default StyledPicker;
