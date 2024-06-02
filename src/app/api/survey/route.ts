import { getSurveyData } from '@/server/actions';
import { getQuarterDateRange, getYearStartAndEndDates } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { vessel, fiscalYear, quarter, startDate, endDate } = requestBody;
    let dateRange = null;

    // Use custom date range if provided
    if (startDate && endDate) {
      dateRange = { startDate, endDate };
    } else if (fiscalYear) {
      const { startDate: yearStartDate, endDate: yearEndDate } =
        getYearStartAndEndDates(fiscalYear);
      dateRange = {
        startDate: yearStartDate.toISOString(),
        endDate: yearEndDate.toISOString(),
      };
    }

    if (fiscalYear && quarter) {
      const { startDate: quarterStartDate, endDate: quarterEndDate } =
        getQuarterDateRange(fiscalYear, quarter);
      dateRange = {
        startDate: quarterStartDate.toString(),
        endDate: quarterEndDate.toString(),
      };
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
