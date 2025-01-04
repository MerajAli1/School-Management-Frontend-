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
import { jwtDecode } from "jwt-decode";
import AdminProfile from "../admin/AdminProfile";
import TeacherHomePage from "../teacher/TeacherHomePage";
import StudentHomePage from "../student/StudentHomePage";
import StudentAttendanceReport from "../student/StudentAttendanceReport";
import StudentAllNotices from "../student/StudentAllNotices";
import TeacherStudentAttendance from "../teacher/TeacherStudentAttendance";
import TeacherAllNotices from "../teacher/TeacherAllNotices";
import TeacherAttendanceReport from "../teacher/TeacherAttendanceReport";

const drawerWidth = 240;

// Routes for the admin dashboard
const routes = [
  {
    name: "Home",
    path: "adminHome",
    element: <AdminHomePage />,
    icon: <i style={{ fontSize: "25px" }} className="fa-solid fa-house"></i>,
  },
  {
    name: "Teacher Attendance",
    path: "attendance",
    element: <Attendance />,
    icon: (
      <i style={{ fontSize: "25px" }} className="fa-solid fa-clipboard-user"></i>
    ),
  },
  {
    name: "Create Notice",
    path: "createnotice",
    element: <CreateNotice />,
    icon: (
      <i style={{ fontSize: "25px" }} className="fa-regular fa-clipboard"></i>
    ),
  },
  {
    name: "Register Student",
    path: "registerStudent",
    element: <RegisterStudent />,
    icon: (
      <i style={{ fontSize: "25px" }} className="fa-solid fa-user-plus"></i>
    ),
  },
  {
    name: "Register Teacher",
    path: "registerTeacher",
    element: <RegisterTeacher />,
    icon: (
      <i style={{ fontSize: "25px" }} className="fa-solid fa-chalkboard-user"></i>
    ),
  },
  {
    name: "All Notices",
    path: "allNotice",
    element: <AllNotices />,
    icon: (
      <i style={{ fontSize: "25px" }} className="fa-regular fa-clipboard"></i>
    ),
  },
  {
    name: "All Students",
    path: "allStudents",
    element: <AllStudents />,
    icon: <i style={{ fontSize: "25px" }} className="fa-solid fa-id-card"></i>,
  },
];

// Routes for the admin Profile
const profileRoutes = [
  {
    name: "Profile",
    path: "adminProfile",
    element: <AdminProfile />,
  },
];

// Routes for the Teacher Dashboard
const teacherRoutes = [
  {
    name: "Home",
    path: "teacherHome",
    element: <TeacherHomePage />,
    icon: <i style={{ fontSize: "25px" }} className="fa-solid fa-house"></i>,
  },
  {
    name: "Student Attendance",
    path: "teacherStudentAttendance",
    element: <TeacherStudentAttendance/>,
    icon:  <i style={{ fontSize: "25px" }} className="fa-solid fa-clipboard-user"></i>,
  },
  {
    name: "Notices",
    path: "allNotices",
    element: <TeacherAllNotices/>,
    icon:  <i style={{ fontSize: "25px" }} className="fa-regular fa-clipboard"></i>,
  },
  {
    name: "Attendance Report",
    path: "attendanceReport",
    element: <TeacherAttendanceReport/>,
    icon:  <i style={{ fontSize: "25px" }} className="fa-solid fa-chart-line"></i>,
  },
];

// Routes for the Student Dashboard
const studentRoutes = [
  {
    name: "Home",
    path: "studentHome",
    element: <StudentHomePage />,
    icon: <i style={{ fontSize: "25px" }} className="fa-solid fa-house"></i>,
  },
  {
    name: "Attendance Report",
    path: "studentAttendanceReport",
    element: <StudentAttendanceReport />,
    icon: <i style={{ fontSize: "25px" }} className="fa-solid fa-clipboard-user"></i>,
  },
  {
    name: "Notices",
    path: "allNotices",
    element: <StudentAllNotices/>,
    icon: <i style={{ fontSize: "25px" }} className="fa-regular fa-clipboard"></i>,
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
  const token = JSON.parse(localStorage.getItem("token"));
  const decoded = jwtDecode(token);
  console.log("decoded: ", decoded);

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
            {decoded.role} Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          color: "red",
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
          {/* Mapping the routes based on the user's role */}
          {(decoded.role === "ADMIN"
            ? routes
            : decoded.role === "Teacher"
            ? teacherRoutes
            : studentRoutes
          ).map((route, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigateHandler(route.path)}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          {decoded.role === "admin" &&
            profileRoutes.map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigateHandler(route.path)}>
                  <ListItemIcon>
                    {index === 0 && (
                      <i
                        style={{ fontSize: "25px" }}
                        className="fa-solid fa-user"
                      ></i>
                    )}
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            ))}
          {/* Logout button */}
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
        {/* Routes based on the user's role */}
        <Routes>
          {(decoded.role === "ADMIN"
            ? routes
            : decoded.role === "Teacher"
            ? teacherRoutes
            : studentRoutes
          ).map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          {decoded.role === "ADMIN" &&
            profileRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </Main>
    </Box>
  );
}
