import React, { useMemo } from "react";
import {
  SSpeedDial,
  SSpeedDialIcon,
  SSpeedDialAction,
  SDarkModeIcon,
  SLightModeIcon,
} from "./styles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setThemeMode, selectThemeMode } from "../../redux/reducers";

export const FloatDevTools: React.FC = () => {
  const selectedTheme = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();
  const actions = useMemo(
    () => [
      {
        icon: selectedTheme === "dark" ? <SDarkModeIcon /> : <SLightModeIcon />,
        name: "Theme",
        handler: () =>
          dispatch(setThemeMode(selectedTheme === "dark" ? "light" : "dark")),
      },
    ],
    [selectedTheme, dispatch]
  );

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <SSpeedDial ariaLabel="Dev tools" icon={<SSpeedDialIcon />}>
      {actions.map((action) => (
        <SSpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.handler}
        />
      ))}
    </SSpeedDial>
  );
};
