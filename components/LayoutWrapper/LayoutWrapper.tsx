interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return <div className="w-full max-w-6xl h-fit mx-auto px-4">{children}</div>;
}
