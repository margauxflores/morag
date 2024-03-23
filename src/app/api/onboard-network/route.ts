import { prepareAndGenerateResponse } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    const title = 'Onboard Network';
    const questions = [
      { id: 74, title: 'LAN' },
      { id: 75, title: 'LAN Setting Guide' },
      { id: 76, title: 'Email' },
      { id: 77, title: 'Data Access' },
      { id: 78, title: 'Data Timing' },
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
