"use client";
import { FaSearch, FaBell } from "react-icons/fa";

export default function DashboardHeader() {
	return (
		<header className="bg-white border-b border-gray-200 px-8 py-4">
			<div className="flex items-center justify-between">
				<div className="flex-1 max-w-xl relative">
					<FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
					<input
						type="text"
						placeholder="Search Item, Collection and Account"
						className="w-full pl-10 border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
					/>
				</div>

				<div className="flex items-center gap-4">
					<span className="text-sm font-medium text-blue-600">User</span>
					<span className="text-sm text-gray-500">Creator</span>
					<button className="text-gray-500 hover:text-gray-700">
						<FaBell className="w-5 h-5" />
					</button>
					<div className="w-10 h-10 rounded-full bg-gray-200" />
				</div>
			</div>
		</header>
	);
}
