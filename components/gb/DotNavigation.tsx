"use client";

const sections = [
  "hero",
  "services",
  "servicesSection",
  "testimonials",
  "foundersMessage",
  "ourClients",
  "contact",
];

interface DotNavigationProps {
  currentIndex: number;
  onSectionChange: (index: number) => void;
}

export default function DotNavigation({
  currentIndex,
  onSectionChange,
}: DotNavigationProps) {
  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
      {sections.map((id, index) => (
        <button
          key={id}
          onClick={() => onSectionChange(index)}
          className={`w-2 h-2 rounded-xs transition-all duration-300 ${
            currentIndex === index
              ? "bg-teal-600 border-teal-500 scale-125"
              : "bg-gray-300 border-gray-400 hover:bg-teal-500 hover:border-teal-500"
          }`}
          aria-label={`Go to ${id} section`}
        />
      ))}
    </div>
  );
}
