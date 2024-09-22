// Section.tsx
interface SectionProps {
    title: string;
    icon: React.ReactNode;
    imageUrl: string;
    content: React.ReactNode;
}

export default function Section({ title, icon, imageUrl, content }: SectionProps) {
    return (
        <div className="relative bg-zinc-800 p-6 rounded-lg shadow-xl overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="relative z-10 flex items-center space-x-3 mb-4">
                {icon}
                <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <div className="relative z-10">{content}</div>
        </div>
    );
}
