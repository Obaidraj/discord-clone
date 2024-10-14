export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-slate-500 h-full w-full">{children}</div>;
}
