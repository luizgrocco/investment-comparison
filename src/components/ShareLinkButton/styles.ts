import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const SButton = styled(Button)`
  margin-right: 15px;
  padding: 6px 12px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const SContentCopyIcon = styled(ContentCopyIcon)``;

export const SButtonText = styled(Typography)`
  margin-left: 10px;
  font-size: 14px;
  text-transform: none;
`;
