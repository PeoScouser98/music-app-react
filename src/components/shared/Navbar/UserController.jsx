import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Atoms/Avatar";
import Dropdown from "../Atoms/Dropdown";
import { Menu, MenuItem } from "../Atoms/Menu";
import { HiLogout } from "react-icons/hi";
const UserController = ({ user }) => {
	return (
		<Dropdown dropdownButtonElement={<Avatar imageUrl={user.avatar} />}>
			<Menu>
				<MenuItem>
					<Link to="/account/:id">{user.username}</Link>
				</MenuItem>
				<MenuItem>
					<HiLogout /> Logout
				</MenuItem>
			</Menu>
		</Dropdown>
	);
};

export default UserController;
