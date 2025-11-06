"use client";
import { FaArrowRight } from "react-icons/fa";

export default function WelcomeBanner() {
	return (
		<div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-8 mb-8 flex justify-between items-center">
			<div>
				<h1 className="text-3xl font-bold mb-2">👋 Welcome back, Emmanuel!</h1>
				<p className="text-gray-600 mb-4">Discover and sell your own NFTs.</p>
				<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-2">
					Discover Now <FaArrowRight />
				</button>
			</div>
			<div className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center shadow-md">
				<span className="text-5xl font-bold text-black">C</span>
			</div>
		</div>
	);
}
