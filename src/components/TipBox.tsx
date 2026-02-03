import { Lightbulb, Info, AlertTriangle, CheckCircle } from 'lucide-react';

interface TipBoxProps {
  children: React.ReactNode;
  type?: 'tip' | 'info' | 'warning' | 'success';
  title?: string;
}

const icons = {
  tip: Lightbulb,
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
};

const styles = {
  tip: 'border-yellow-400 bg-yellow-50',
  info: 'border-blue-400 bg-blue-50',
  warning: 'border-orange-400 bg-orange-50',
  success: 'border-green-400 bg-green-50',
};

const iconColors = {
  tip: 'text-yellow-500',
  info: 'text-blue-500',
  warning: 'text-orange-500',
  success: 'text-green-500',
};

export function TipBox({ children, type = 'tip', title }: TipBoxProps) {
  const Icon = icons[type];
  
  return (
    <div className={`tip-box ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColors[type]}`} />
        <div>
          {title && <p className="font-semibold text-gray-800 mb-1">{title}</p>}
          <div className="text-gray-700 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
