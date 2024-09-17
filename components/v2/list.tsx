import React from "react";
import HighlightText from "./highlight-text";

type ListProps = {
  list: string[];
};

const List = ({ list }: ListProps) => {
  return (
    <div>
      {list.map((point, i) => (
        <p key={i} className="font-semibold text-xs">
          &#8226; <HighlightText>{point}</HighlightText>{" "}
        </p>
      ))}
    </div>
  );
};

export default List;
