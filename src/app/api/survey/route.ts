import { getSurveyData } from '@/server/actions';
import { getQuarterDateRange } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { vessel, fiscalYear, quarter } = requestBody;
    let dateRange = null;

    if (fiscalYear && quarter) {
      dateRange = getQuarterDateRange(fiscalYear, quarter);
    }

    const data = await getSurveyData({
      vesselId: vessel,
      startDate: dateRange?.startDate,
      endDate: dateRange?.endDate,
    });

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in POST request:', error);

    let message = 'Unknown error';

    if (error instanceof Error) {
      message = error.message;
    }

    const errorResponse = {
      error: 'An error occurred while processing your request.',
      details: message,
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
