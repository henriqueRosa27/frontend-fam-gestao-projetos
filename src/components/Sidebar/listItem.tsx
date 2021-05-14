import { FC, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Popover,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Itens from "./itens";
import { useStyles, popoverStyle } from "./styles";

const ListItems: FC = () => {
  const classes = useStyles();
  const popoverClasses = popoverStyle();
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(
    null
  );
  const [popoverId, setPopoverId] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseEnter = (e: any, name: string): void => {
    if (e.target.offsetWidth < e.target.scrollWidth) {
      setAnchorEl(e.currentTarget);
      setPopoverId(name);
    }
  };

  const handleMouseLeave = (): void => {
    setAnchorEl(null);
    setPopoverId(null);
  };

  return (
    <List style={{ paddingTop: 0, marginTop: 15 }}>
      {Itens.map(item => (
        <div key={item.name}>
          <span
            onMouseEnter={e => {
              handleMouseEnter(e, item.name);
            }}
            onMouseLeave={handleMouseLeave}>
            <ListItem button component={Link} to={item.route}>
              <ListItemIcon className={classes.listItemIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </span>
          <Popover
            key={item.name}
            id="mouse-over-popover"
            className={popoverClasses.popover}
            classes={{
              paper: popoverClasses.paper,
            }}
            open={popoverId === item.name}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            onClose={handleMouseLeave}
            disableRestoreFocus
            elevation={5}>
            <Typography>{item.name}</Typography>
          </Popover>
        </div>
      ))}
    </List>
  );
};

export { ListItems };
