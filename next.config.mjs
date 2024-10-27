import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Add your common Next.js config here if needed
};

export default withBundleAnalyzer(nextConfig);
