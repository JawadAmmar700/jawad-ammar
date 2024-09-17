import React from "react";
import HighlightText from "./highlight-text";
import SectionTitle from "./section-title";
import Separator from "./separator";

const Languages = () => {
  return (
    <div className="mt-5">
      <SectionTitle>LANGUAGES</SectionTitle>
      <Separator />
      <div className="mt-2 flex flex-col space-y-1">
        <p className="text-xs font-semibold">
          <HighlightText>Arabic (Native)</HighlightText>
        </p>
        <p className="text-xs font-semibold">
          <HighlightText>English (Advanced)</HighlightText>
        </p>
      </div>
    </div>
  );
};

export default Languages;
