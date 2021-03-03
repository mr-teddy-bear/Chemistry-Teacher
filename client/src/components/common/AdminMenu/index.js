import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./styles.module.css";
import AdminAvatar from "../AdminAvatar";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/admin">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
        </Link>

        <Link to="/admin/razdels">
          <ListItem button>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Разделы" />
          </ListItem>
        </Link>
        <Link to="/admin/test">
          <ListItem button>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Тесты" />
          </ListItem>
        </Link>
        <Link to="/admin/questions">
          <ListItem button>
            <ListItemIcon>
              <TurnedInNotIcon />
            </ListItemIcon>
            <ListItemText primary="Вопросы" />
          </ListItem>
        </Link>
        <Link to="/admin/students">
          <ListItem button>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Ученики" />
          </ListItem>
        </Link>
        <Link to="/admin/progress">
          <ListItem button>
            <ListItemIcon>
              <AutorenewIcon />
            </ListItemIcon>
            <ListItemText primary="Прогресс" />
          </ListItem>
        </Link>
        <Link to="/admin/new">
          <ListItem button>
            <ListItemIcon>
              <FiberNewIcon />
            </ListItemIcon>
            <ListItemText primary="Результаты" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Выход" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={styles.menu}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </Button>
            <h1>LOGO</h1>
            <AdminAvatar className={styles.avatar} />
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
