export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="text-center w-full border-b border-gray-300 ">
        20 % Off Signin Now
        {children}
      </div>
    );
  }
    