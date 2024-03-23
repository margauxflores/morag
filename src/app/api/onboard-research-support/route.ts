import { prepareAndGenerateResponse } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    const title = 'Onboard Research Support';
    const questions = [
      { id: 62, title: 'Shinkai 6500 Operation' },
      { id: 63, title: 'ROV Operation' },
      { id: 64, title: 'AUV Operation' },
      { id: 65, title: 'Deep Tow Operation' },
      { id: 66, title: 'SCS/MCS Operation' },
      { id: 67, title: 'OBS Operation' },
      { id: 68, title: 'Water Sampling Operation' },
      { id: 69, title: 'Sediment Sampling Operation' },
      { id: 70, title: 'Portable Instruments Operation' },
      { id: 71, title: 'Built-in Equipments Operation' },
      { id: 72, title: 'Ship Crew' },
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
