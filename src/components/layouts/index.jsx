import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";
import AppProvider from "../context/AppProvider";
import ErrorBoundary from "../customs/ErrorBoundary";
import Loading from "../shared/Atomics/Loading";
import AudioPlayer from "../shared/AudioPlayer";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

const DrawerLayout = tw.div`drawer drawer-mobile `;
const DrawerContentWrapper = tw.div`invisible-scroll drawer-content relative flex h-screen w-full flex-col justify-between overflow-x-auto overflow-y-auto`;
const PageContent = tw.div`flex flex-col justify-between w-full h-full gap-10 overflow-y-auto invisible-scroll bg-base-100 p-6 xxl:p-10`;
const SidebarToggler = tw.input`drawer-toggle`;

const Layout = () => {
	return (
		<AppProvider>
			<DrawerLayout data-theme="dracula">
				<SidebarToggler id="sidebar-toggle" type="checkbox" />
				<DrawerContentWrapper>
					<Navbar />
					<PageContent>
						<Suspense fallback={<Loading size="loading-md" />}>
							<Outlet />
						</Suspense>
					</PageContent>
					<AudioPlayer />
				</DrawerContentWrapper>
				<Sidebar />
			</DrawerLayout>
		</AppProvider>
	);
};

export default Layout;
