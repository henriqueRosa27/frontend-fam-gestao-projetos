import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";

import BreadcrumbMap from "./breadcrumbMap";
import { useStyles } from "./styles";

const BreadcrumbsComponent: FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const hasEdit = pathname.indexOf("/editar/");
  let location: string;

  if (hasEdit > 0) {
    location = pathname.slice(0, hasEdit + 7);
  } else {
    location = pathname;
  }

  const breadcrumbMap = BreadcrumbMap[location];

  if (!breadcrumbMap) return <></>;

  const normalText = (name: string): JSX.Element => {
    return (
      <Typography key={name} className={classes.text}>
        {name}
      </Typography>
    );
  };

  const linkText = (name: string, link: string): JSX.Element => {
    return (
      <Link href={link} key={name} className={classes.link}>
        {name}
      </Link>
    );
  };

  const contentBreadcrumbs = breadcrumbMap.map(data => {
    return data.link ? linkText(data.name, data.link) : normalText(data.name);
  });

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.text}>
        {contentBreadcrumbs.map(data => data)}
      </Breadcrumbs>
    </div>
  );
};

export { BreadcrumbsComponent };
