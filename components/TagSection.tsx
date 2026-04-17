import React from "react";

function TagSection({ tags }: { tags: string[] }) {
  return (
    <div className="inline-flex flex-wrap justify-center gap-1 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-foreground bg-tertiary px-2 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagSection;
