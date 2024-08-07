import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdminHomePage from "../admin/AdminHomePage";
import Attendance from "../admin/Attendance";
import CreateNotice from "../admin/CreateNotice";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import RegisterStudent from "../admin/RegisterStudent";
import RegisterTeacher from "../admin/RegisterTeacher";
import AllNotices from "../admin/AllNotices";
import AllStudents from "../admin/AllStudents";

const drawerWidth = 240;
// Routes for the admin dashboard
const routes = [
  {
    name: "Home",
    path: "adminHome",
    element: <AdminHomePage />,
  },
  {
    name: "Teacher Attendance",
    path: "attendance",
    element: <Attendance />,
  },
  {
    name: "Create Notice",
    path: "createnotice",
    element: <CreateNotice />,
  },

  {
    name: "Register Student",
    path: "registerStudent",
    element: <RegisterStudent />,
  },
  {
    name: "Register Teacher",
    path: "registerTeacher",
    element: <RegisterTeacher />,
  },
  {
    name: "All Notices",
    path: "allNotice",
    element: <AllNotices />,
  },
  {
    name: "All Students",
    path: "allStudents",
    element: <AllStudents />,
  },
];
// Styling for the admin dashboard
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// Styling for the admin dashboard
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// Styling for the admin dashboard
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* //Mapping the routes for the admin dashboard */}
          {routes.map((route, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigateHandler(route.path)}>
                <ListItemIcon>
                  {index === 0 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-solid fa-house"
                    ></i>
                  )}
                  {index === 1 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-solid fa-clipboard-user"
                    ></i>
                  )}
                  {index === 2 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-regular fa-clipboard"
                    ></i>
                  )}
                  {index === 3 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-solid fa-user-plus"
                    ></i>
                  )}
                  {index === 4 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-solid fa-chalkboard-user"
                    ></i>
                  )}
                  {index === 5 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-regular fa-clipboard"
                    ></i>
                  )}
                  {index === 6 && (
                    <i
                      style={{ fontSize: "25px" }}
                      className="fa-solid fa-id-card"
                    ></i>
                  )}
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* //Logout button */}
          <Button
            sx={{ margin: "auto", display: "block", marginTop: "20px" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            variant="contained"
          >
            Logout
          </Button>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* // Routes for the admin dashboard */}
        <Routes>
          <Route path="/adminHome" element={<AdminHomePage />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/createnotice" element={<CreateNotice />} />
          <Route path="/allNotice" element={<AllNotices />} />
          <Route path="/allStudents" element={<AllStudents />} />
          <Route path="/registerStudent" element={<RegisterStudent />} />
          <Route path="/registerTeacher" element={<RegisterTeacher />} />
        </Routes>
      </Main>
    </Box>
  );
}
