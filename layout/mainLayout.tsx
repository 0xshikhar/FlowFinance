import Navbar from "../components/navigation";
import React, { ReactNode } from "react";

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
