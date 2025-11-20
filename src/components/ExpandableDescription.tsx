import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableDescriptionProps {
  shortDescription: string;
  longDescription?: string;
  defaultExpanded?: boolean;
  forceCollapsed?: boolean;
}

export const ExpandableDescription = ({
  shortDescription,
  longDescription,
  defaultExpanded = false,
  forceCollapsed = false
}: ExpandableDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  // Update expansion state when defaultExpanded changes
  useEffect(() => {
    setIsExpanded(defaultExpanded && !forceCollapsed);
  }, [defaultExpanded, forceCollapsed]);

  if (!longDescription) {
    return <p className="text-gray-300 leading-relaxed">{shortDescription}</p>;
  }

  return (
    <div>
      {/* Description Text with smooth transitions */}
      <p 
        className="text-gray-300 leading-relaxed mb-2 whitespace-pre-line transition-all duration-300" 
        dangerouslySetInnerHTML={{ __html: isExpanded ? longDescription : shortDescription }}
      />
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors"
      >
        {isExpanded ? (
          <>
            <span>Read less</span>
            <ChevronUp size={16} className="ml-1" />
          </>
        ) : (
          <>
            <span>Read more</span>
            <ChevronDown size={16} className="ml-1" />
          </>
        )}
      </button>
    </div>
  );
};
