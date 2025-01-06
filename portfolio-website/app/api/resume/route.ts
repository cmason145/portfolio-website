import { NextResponse } from 'next/server';

const GOOGLE_DRIVE_FILE_ID = '1mqcA6Vm7qdYALvMcsw7UO5rU5dFDzqK9';
const GOOGLE_DRIVE_VIEW_URL = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

export async function GET() {
  try {
    const response = await fetch(GOOGLE_DRIVE_VIEW_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch resume');
    }

    const fileBuffer = await response.arrayBuffer();
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error fetching resume:', error);
    return new NextResponse('Failed to fetch resume', { status: 500 });
  }
}