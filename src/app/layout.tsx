import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = true;
  return (
    <html lang="en">
      <head />

      <body>
        {!session ? (
          <div>
            <h1>Please go for Login</h1>
          </div>
        ) : (
          <div>
            <div>{children}</div>
          </div>
        )}
      </body>
    </html>
  );
}
