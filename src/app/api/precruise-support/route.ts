import { generateResponse, prepareAndGenerateResponse } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    const title = 'Precruise Support';
    const questions = [
      { id: 21, title: 'Vessels and Tools Guide' },
      { id: 22, title: 'Advanced Vessels and Tools Guide' },
      { id: 23, title: 'Life Onboard Tools' },
      { id: 24, title: 'Logistics' },
      { id: 25, title: 'Boarding Guide' },
      { id: 26, title: 'Risk Assessment' },
      { id: 27, title: 'Overall Precruise Support' },
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
