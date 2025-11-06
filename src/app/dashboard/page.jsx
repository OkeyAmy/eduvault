"use client";

import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import WelcomeBanner from "./components/WelcomeBanner";
import StatsCards from "./components/StatsCards";
import TrendingMaterials from "./components/TrendingMaterials";
import TopCreators from "./components/TopCreators";
import LatestActivity from "./components/LatestActivity";

export default function DashboardPage() {
	return (
		<div className="flex min-h-screen bg-gray-50 text-gray-900">
			<Sidebar />

			<main className="flex-1 overflow-auto">
				<DashboardHeader />

				<div className="p-8">
					<WelcomeBanner />
					<StatsCards />

					<div className="grid md:grid-cols-3 gap-8">
						<TrendingMaterials />
						<div className="space-y-6">
							<TopCreators />
							<LatestActivity />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
