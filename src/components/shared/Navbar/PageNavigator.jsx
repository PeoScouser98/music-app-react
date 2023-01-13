import React from "react";
import Tooltip from "../Atomics/Tooltip";
import tw from "tailwind-styled-components";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
const PageNavigatorWrapper = tw.div`flex items-center gap-3 sm:hidden`;

const PageNavigator = () => {
	return (
		<PageNavigatorWrapper>
			<Tooltip dataTip={"Go back"} position="bottom">
				<button className="text-2xl text-base-content/50 hover:text-base-content" onClick={history.go(-1)}>
					<BsArrowLeftShort />
				</button>
			</Tooltip>
			<Tooltip dataTip={"Go forward"} position="bottom">
				<button className="text-2xl text-base-content/50 hover:text-base-content" onClick={history.go(1)}>
					<BsArrowRightShort />
				</button>
			</Tooltip>
		</PageNavigatorWrapper>
	);
};

export default PageNavigator;