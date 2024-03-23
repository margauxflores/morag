import { prepareAndGenerateResponse } from '@/utils';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();

    const title = 'Onboard Equipment';
    const questions = [
      { id: 30, title: 'Lab Power Supply' },
      { id: 31, title: 'Lab Layout' },
      { id: 32, title: 'Lab Lighting' },
      { id: 33, title: 'MBES' },
      { id: 34, title: 'SBP' },
      { id: 35, title: 'XBT/XCTD' },
      { id: 36, title: 'PDR' },
      { id: 37, title: 'ADCP' },
      { id: 38, title: 'Doppler Radar' },
      { id: 39, title: 'Gravitometer' },
      { id: 40, title: 'Magnetometer' },
      { id: 41, title: 'Fish Finder' },
      { id: 42, title: 'Weather Monitor' },
      { id: 43, title: 'Shinkai 6500' },
      { id: 44, title: 'Kaiko' },
      { id: 45, title: 'Hyper Dolphin' },
      { id: 46, title: 'KM-ROV' },
      { id: 47, title: 'Deep Tow' },
      { id: 48, title: 'YKDT' },
      { id: 49, title: 'Urashima AUV' },
      { id: 50, title: 'Jinbei AUV' },
      { id: 51, title: 'OBS' },
      { id: 52, title: 'SCS' },
      { id: 53, title: 'MCS' },
      { id: 54, title: 'Water Sampling' },
      { id: 55, title: 'CTD' },
      { id: 56, title: 'Normal Piston Coring' },
      { id: 57, title: 'Dredge' },
      { id: 58, title: 'Power Grab' },
      { id: 59, title: 'BMS' },
      { id: 60, title: 'GCP' },
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
