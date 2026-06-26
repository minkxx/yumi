import { config } from "@/lib/shared/config";

export default async function AuthGuard({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// TODO: update with actual page not found component
	if (!(config.NODE_ENV === "development")) return <div>Page Not Found</div>;

	return <>{children}</>;
}
