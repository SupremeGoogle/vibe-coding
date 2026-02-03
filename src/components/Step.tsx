interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
  color?: string;
}

export function Step({ number, title, children, color = 'bg-python' }: StepProps) {
  return (
    <div className="flex gap-4 mb-6">
      <div className={`step-number ${color} flex-shrink-0`}>
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
}
