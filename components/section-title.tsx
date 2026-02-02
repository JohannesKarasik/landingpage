export default function SectionTitle({
    badge,
    icon,
    title,
    description,
  }: {
    badge?: string;
    icon?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col items-center justify-center">
        {(badge || icon) && (
          <div className="flex items-center gap-2 rounded-full bg-green-400/10 px-6 py-1.5 text-sm text-green-600">
            {icon}
            {badge && <span>{badge}</span>}
          </div>
        )}
  
        <div className="mt-6 text-center text-slate-700">
          <h2 className="text-3xl font-medium sm:text-4xl">{title}</h2>
          {description && (
            <p className="mt-4 max-w-xl text-base text-slate-500">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }