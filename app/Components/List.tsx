import React from "react";
import Text from "./Text";

type SelectableListProps = {
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  items: string[];
};

const SelectableList: React.FC<SelectableListProps> = ({
  title,
  highlightedWord,
  subtitle,
  items,
}) => {
  return ( 
    <div className="w-full max-w-[90vh] mx-auto text-center space-y-4 my-">
      <Text type="subtitle" className="font-semibold">
        {title.split(highlightedWord ?? "").map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="text-purple-500">{highlightedWord}</span>
            )}
          </React.Fragment>
        ))}
        {subtitle && <span className="block">{subtitle}</span>}
      </Text>

      <ul className="flex flex-col gap-3 w-full py-8">
        {items.map((text, index) => (
          <li
            key={index}
            className={`rounded-md px-6 md:px-6 py-2 md:py-5 text-md md:text-xl bg-semantic-background-list hover:bg-primary-helem-500 text-white text-center font-medium transition-all ease-in-out duration-300`}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectableList;
