import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: { xs: 2, md: 0 },
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="subtitle1"
        sx={{
          color: "#fff",
          px: 2,
        }}
      >
        YT CLONE
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
