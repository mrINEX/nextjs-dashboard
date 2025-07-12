import { fetchCardData } from '@/app/lib/data';

export default async function HealthCheck() {
  try {
    const data = await fetchCardData();
    return (
      <div className="text-xs text-green-600">
        Database: Connected ✓ Data: {!!data ? '✅' : '❌'}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-xs text-red-600">
        Database: Error - {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
} 