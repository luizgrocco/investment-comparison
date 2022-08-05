import styled from "styled-components";
import { SpeedDial } from "@mui/material";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

export const SSpeedDial = styled(SpeedDial)`
  position: sticky;
  bottom: 16;
  right: 16;
`;

export const SSpeedDialIcon = styled(SpeedDialIcon)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

// export const SSpeedDialAction = styled(SpeedDialAction)`
// `;
