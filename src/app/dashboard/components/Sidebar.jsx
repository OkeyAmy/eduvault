"use client";

import Link from "next/link";
import {
	FaTachometerAlt,
	FaShoppingBag,
	FaUpload,
	FaAward,
	FaUser,
	FaDollarSign,
	FaHeart,
	FaHistory,
	FaCog,
	FaMoon,
} from "react-icons/fa";

export default function Sidebar() {
	const menuItems = [
		{ icon: <FaTachometerAlt />, label: "Dashboard", href: "/dashboard" },
		{ icon: <FaShoppingBag />, label: "Market", href: "/market" },
		{ icon: <FaUpload />, label: "Upload Material", href: "/upload" },
		{ icon: <FaAward />, label: "Leaderboard", href: "/leaderboard" },
	];

	const profileItems = [
		{ icon: <FaUser />, label: "My Materials", href: "/my-materials" },
		{ icon: <FaDollarSign />, label: "Earnings", href: "/earnings" },
		{ icon: <FaHeart />, label: "Favourites", href: "/favourites" },
		{ icon: <FaHistory />, label: "History", href: "/history" },
		{ icon: <FaCog />, label: "Settings", href: "/settings" },
	];

	return (
		<aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
			<div className="text-2xl font-bold mb-8">LOGO.</div>

			{/* Main Menu */}
			<nav className="space-y-2 mb-8">
				{menuItems.map((item, i) => (
					<Link
						key={i}
						href={item.href}
						className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 transition"
					>
						{item.icon}
						<span>{item.label}</span>
					</Link>
				))}
			</nav>

			{/* Profile */}
			<div className="mb-8">
				<h3 className="text-sm font-semibold text-gray-500 mb-3 px-4">
					PROFILE
				</h3>
				<nav className="space-y-2">
					{profileItems.map((item, i) => (
						<Link
							key={i}
							href={item.href}
							className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 transition"
						>
							{item.icon}
							<span>{item.label}</span>
						</Link>
					))}
				</nav>
			</div>

			{/* Other */}
			<div className="mb-8">
				<h3 className="text-sm font-semibold text-gray-500 mb-3 px-4">OTHER</h3>
				<button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition w-full text-left">
					<FaMoon className="w-5 h-5" />
					<span>Light Mode</span>
				</button>
			</div>

			{/* Wallet Card */}
			<div className="mt-auto p-4 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-xl">
				<div className="text-3xl font-bold mb-1">5,034.02</div>
				<div className="text-sm opacity-90 mb-4">Celo</div>
				<button className="bg-white text-blue-600 font-semibold py-2 px-3 w-full rounded-md hover:bg-gray-100">
					Top Up Balance
				</button>
			</div>
		</aside>
	);
}
