import { generateResponse } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const { vesselId, startDate, endDate } = requestBody;

    const questions = [
      { id: 80, title: 'Cleanliness' },
      { id: 81, title: 'Facilities' },
      { id: 82, title: 'Meals' },
      { id: 83, title: 'Dining' },
    ];

    const response = await generateResponse(
      'Life Onboard',
      questions,
      vesselId,
      startDate,
      endDate,
    );

    return new Response(JSON.stringify(response), {
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
