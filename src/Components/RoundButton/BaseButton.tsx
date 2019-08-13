import * as React from "react";
import {SyntheticEvent} from "react";
import styled from "styled-components/macro";

export interface IButton {
  onClick?: (e: SyntheticEvent<HTMLSpanElement>) => void;
  className?: string;
  round?: boolean;
}

const BaseButton: React.FunctionComponent<IButton> = ({ onClick, className, children }) => (
  <span className={className} onClick={onClick}>
    {children}
  </span>
);

BaseButton.defaultProps = {
  round: false,
};

export default styled(BaseButton)`
  display: block;
  cursor: pointer;
  border-radius: ${(props) => props.round ? '50%' : '0%'};
`;
