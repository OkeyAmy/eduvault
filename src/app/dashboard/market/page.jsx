"use client";

import { useEffect, useState } from "react";
import { FaHeart, FaFilter } from "react-icons/fa";

// Skeleton shimmer effect
const SkeletonCard = () => (
	<div className="bg-white rounded-xl border border-gray-200 p-4 animate-pulse">
		<div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
		<div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
		<div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
		<div className="h-3 bg-gray-200 rounded w-1/3"></div>
	</div>
);

export default function MarketPage() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [materials, setMaterials] = useState([]);
	const [loading, setLoading] = useState(true);

	const categories = ["All", "Social Sciences", "Engineering", "Pharmacy"];

	useEffect(() => {
		// Simulate loading delay
		setTimeout(() => {
			setMaterials([
				{
					title: "CHM 112 — Lab Report Template (UNN)",
					author: "Chijioke M.",
					likes: "21.5K Likes",
					price: "0.25 CELO",
				},
				{
					title: "CHM 112 — Lab Report Template (UNN)",
					author: "Chijioke M.",
					likes: "21.5K Likes",
					price: "0.25 CELO",
				},
				{
					title: "CHM 112 — Lab Report Template (UNN)",
					author: "Chijioke M.",
					likes: "21.5K Likes",
					price: "0.25 CELO",
				},
				{
					title: "CHM 112 — Lab Report Template (UNN)",
					author: "Chijioke M.",
					likes: "21.5K Likes",
					price: "0.25 CELO",
				},
				{
					title: "CHM 112 — Lab Report Template (UNN)",
					author: "Chijioke M.",
					likes: "21.5K Likes",
					price: "0.25 CELO",
				},
				{
					title: "CHM 112 — Lab Report Template (UNN)",
					author: "Chijioke M.",
					likes: "21.5K Likes",
					price: "0.25 CELO",
				},
			]);
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<div className="min-h-screen bg-gray-50 text-gray-900">
			{/* Header Section */}
			<div className="mb-6">
				<h1 className="text-xl md:text-2xl font-bold mb-4">
					Discover Study Materials from Students Like You
				</h1>

				{/* Category Filter Bar */}
				<div className="flex flex-wrap items-center gap-3 mb-6">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${
								activeCategory === category
									? "bg-blue-600 text-white border-blue-600"
									: "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
							}`}
						>
							{category}
						</button>
					))}
					<button className="ml-auto flex items-center gap-2 text-gray-700 border border-gray-300 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
						<FaFilter className="text-gray-600" /> Filter
					</button>
				</div>
			</div>

			{/* Grid Section */}
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{loading
					? // Render Skeletons while loading
					  Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
					: // Render materials when data is ready
					  materials.map((item, index) => (
							<div
								key={index}
								className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all"
							>
								{/* Image Placeholder */}
								<div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-3 relative">
									<span className="text-xs text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm absolute top-2 left-2">
										00:18:45
									</span>
									<button className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-blue-700">
										Get This!
									</button>
								</div>

								{/* Material Details */}
								<h3 className="text-sm font-semibold mb-2">{item.title}</h3>

								<div className="flex items-center justify-between text-xs text-gray-600 mb-2">
									<p className="flex items-center gap-2">
										<div className="w-6 h-6 rounded-full bg-gray-300"></div>
										by {item.author}
									</p>
									<p className="flex items-center gap-1">
										<FaHeart className="text-red-500" />
										{item.likes}
									</p>
								</div>

								<div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-2">
									<span>Current Bid</span>
									<span className="text-yellow-500 font-semibold">
										{item.price}
									</span>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
}
