import React from "react";

export interface SearchIconProps {
  classes?: string;
}

export default function SearchIcon(props: SearchIconProps) {
  const { classes } = props;

  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        focusable="false"
        aria-labelledby="menuSearch"
        role="img"
      >
        <title id="menuSearch">Søke-ikon</title>
        <circle className={classes} cx="10" cy="10" r="7"></circle>
        <path className={classes} d="m15 15 7 7"></path>
        <path className={classes} d="m15 15 7 7"></path>
        <path className={classes} d="m15 15 7 7"></path>
        <path className={classes} d="m15 15 7 7"></path>
      </svg>
    </span>
  );
}
