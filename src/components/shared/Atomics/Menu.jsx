import React from "react";

export const MenuItem = ({ children, tw, handleClick }) => {
	return (
		<li className={`${tw}`} onClick={handleClick}>
			<p className="truncate break-words">{children}</p>
		</li>
	);
};

export const Menu = ({ children, horizontal, tw }) => {
	return (
		<ul className={`menu rounded-box p-1 ${horizontal ? "menu-horizontal" : "menu-vertical"} ${tw}`}>{children}</ul>
	);
};