"use client";

import WelcomeBanner from "./components/WelcomeBanner";
import EarningsSection from "./components/EarningsSection";
import TrendingMaterials from "./components/TrendingMaterials";
import LatestActivity from "./components/LatestActivity";
import TopCreators from "./components/TopCreators";

export default function DashboardPage() {
	return (
		<div className="space-y-8">
			{/* Welcome Banner + Stats */}
			<div className="grid md:grid-cols-3 gap-6 items-start">
				<div className="md:col-span-2">
					<WelcomeBanner />
				</div>
				<EarningsSection />
			</div>

			{/* Trending + Latest Activity + Top Creators */}
			<div className="grid md:grid-cols-3 gap-8">
				<div className="md:col-span-2 space-y-8">
					<TrendingMaterials />
					<LatestActivity />
				</div>
				<TopCreators />
			</div>
		</div>
	);
}
