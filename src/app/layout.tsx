import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta property="og:locale" content="en_US" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
