import { experimentalStyled as styled } from '@material-ui/core/styles';

export const SafeEnvironmentContainer = styled('div')`
  padding: ${({ theme }) => theme.spacing(2)} 0;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  text-align: right;
`;
