import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const handleDropdownClick = (routeName) => {
    setOpenDropdown(openDropdown === routeName ? null : routeName);
  };

  function activeRoute(routeName) {
    return location.pathname === routeName;
  }

  const { color, logo, image, logoText, routes } = props;

  const renderLinks = (routes) =>
    routes.map((prop, key) => {
      const isDropdown = !!prop.children;
      const isActive = activeRoute(prop.layout + prop.path);

      return (
        <div key={key}>
          {isDropdown ? (
            <>
              <ListItem
                button
                className={classNames(classes.itemLink, {
                  [classes[color]]: isActive,
                })}
                onClick={() => handleDropdownClick(prop.name)}
              >
                {typeof prop.icon === "string" ? (
                  <Icon className={classes.itemIcon}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={classes.itemIcon} />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, {
                    [classes.whiteFont]: isActive,
                  })}
                  disableTypography={true}
                />
              </ListItem>
              {openDropdown === prop.name && (
                <List className={classes.nestedList}>
                  {prop.children.map((child, childKey) => (
                    <NavLink
                      to={child.layout + child.path}
                      className={classNames(classes.nestedItem)}
                      activeClassName={classes.activeNestedItem}
                      key={childKey}
                    >
                      <ListItem button className={classes.itemLink}>
                        <ListItemText
                          primary={child.name}
                          className={classes.nestedItemText}
                          disableTypography={true}
                        />
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
              )}
            </>
          ) : (
            <NavLink
              to={prop.layout + prop.path}
              className={classNames(classes.item)}
              activeClassName="active"
              key={key}
            >
              <ListItem button className={classes.itemLink}>
                {typeof prop.icon === "string" ? (
                  <Icon className={classes.itemIcon}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={classes.itemIcon} />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, {
                    [classes.whiteFont]: isActive,
                  })}
                  disableTypography={true}
                />
              </ListItem>
            </NavLink>
          )}
        </div>
      );
    });

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? "left" : "right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {logo && (
            <div className={classes.logo}>
              <a href="#" className={classes.logoLink}>
                <div className={classes.logoImage}>
                  <img src={logo} alt="logo" className={classes.img} />
                </div>
                {logoText}
              </a>
            </div>
          )}
          <div className={classes.sidebarWrapper}>{renderLinks(routes)}</div>
          {image && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={props.rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive,
            }),
          }}
        >
          {logo && (
            <div className={classes.logo}>
              <a href="#" className={classes.logoLink}>
                <div className={classes.logoImage}>
                  <img src={logo} alt="logo" className={classes.img} />
                </div>
                {logoText}
              </a>
            </div>
          )}
          <div className={classes.sidebarWrapper}>{renderLinks(routes)}</div>
          {image && (
            <div
              className={classes.background}
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  color: PropTypes.string, // Add this line
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
