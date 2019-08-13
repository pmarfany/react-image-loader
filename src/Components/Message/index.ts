import styled from "styled-components/macro";

interface IMessage { children: string }

const Message = styled('p')<IMessage>`
  margin-top: 2.5em;
  font-size: .7em;
  border: 1px dotted ${({theme}) => theme.colors.white};
  padding: 15px;
  border-radius: 5px;
`;

export default Message;
