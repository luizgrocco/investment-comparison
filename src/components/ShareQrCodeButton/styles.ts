import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";

export const SButton = styled(Button)`
  margin-right: 15px;
  padding: 6px 12px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SQrCodeIcon = styled(QrCodeIcon)``;

export const SButtonText = styled(Typography)`
  margin-left: 10px;
  font-size: 14px;
  text-transform: none;
`;
