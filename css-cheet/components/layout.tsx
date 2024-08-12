import type { FC, ReactNode } from 'react';
import "../styles/globals.css"

type Props = {
	children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
	return <div>{children}</div>;
};
export default Layout;