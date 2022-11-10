import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { ConnectButton } from "@dailycodeltd/ermu";
import { IconButton, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import useConfigs from "../../hooks/useConfigs";

const Header = () => {
  const { configs, saveConfigs } = useConfigs();
  const { themeMode } = configs;
  return (
    <AppBar
      position={"static"}
      color={"primary"}
      elevation={1}
      sx={{
        borderBottomColor: "divider",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
      }}
    >
      <Toolbar color={"primary.main"}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {process.env.SITE_TITLE}
        </Typography>
        <ConnectButton
          color={"primary"}
          chainId={Number(process.env.NEXT_PUBLIC_CHAIN_ID)}
        />
        <IconButton
          color={"primary"}
          edge="end"
          aria-label="menu"
          onClick={() => {
            saveConfigs({
              themeMode: themeMode === "light" ? "dark" : "light",
            });
          }}
        >
          {themeMode === "dark" ? (
            <Tooltip title={"Switch to light mode"}>
              <LightModeOutlinedIcon />
            </Tooltip>
          ) : (
            <Tooltip title={"Switch to dark mode"}>
              <DarkModeOutlinedIcon color={"secondary"} />
            </Tooltip>
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
