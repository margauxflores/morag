import { prepareAndGenerateResponse } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    const title = 'General';
    const questions = [
      { id: 5, title: 'Onboard Briefing' },
      { id: 6, title: 'Emergency Guidance' },
      { id: 7, title: 'Ship Drill' },
    ];

    const response = await prepareAndGenerateResponse({
      ...requestBody,
      title,
      questions,
    });

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
