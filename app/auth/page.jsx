// app/auth/error/page.js
'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  // Your custom logic to display the message based on the error query parameter
  if (error === 'OAuthAccountNotLinked') {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#D32F2F' }}>Account Not Linked</h1>
        <p>An account with this email already exists.</p>
        <p>
          Please sign in with the original provider you used.
        </p>
      </div>
    );
  }

  // Fallback for other errors
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>An unknown error occurred.</p>
    </div>
  );
}