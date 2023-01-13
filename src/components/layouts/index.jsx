import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import AudioPlayer from "../shared/AudioPlayer";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

const DrawerLayout = tw.div`drawer drawer-mobile `;
const DrawerContentWrapper = tw.div`drawer-content relative w-full max-h-screen flex flex-col justify-between overflow-x-auto overflow-y-auto invisible-scroll`;
const PageContent = tw.div`flex flex-col justify-between w-full h-full gap-10 overflow-y-auto invisible-scroll bg-base-200`;
const SidebarToggler = tw.input`drawer-toggle`;

const Layout = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		console.log(pathname);
	}, [pathname]);
	return (
		<DrawerLayout>
			<SidebarToggler id="sidebar-toggle" type="checkbox" />
			<DrawerContentWrapper>
				{/* ${headerComponent} */}
				<Navbar />
				<PageContent>
					<Outlet />
				</PageContent>
				<AudioPlayer />
			</DrawerContentWrapper>
			<Sidebar />
		</DrawerLayout>
	);
};

export default Layout;
