export const TestimonialCard = ({
  quote,
  name,
  company,
  type,
}: {
  quote: string;
  name: string;
  company: string;
  type: string;
}) => {
  const isLargeCard = type.startsWith("large");
  const padding = isLargeCard ? "p-6" : "p-[30px]";

  let cardClasses = `flex flex-col justify-between items-start rounded-[10px] relative ${padding}`;
  let quoteClasses = "";
  let nameClasses = "";
  let companyClasses = "";
  let cardHeight = "";
  const cardWidth = "w-full md:w-[384px]";

  if (type === "large-teal") {
    cardClasses += " bg-primary/80 shadow-md";
    quoteClasses += " text-primary-foreground dark:text-white text-lg md:text-xl font-medium leading-8";
    nameClasses += " text-primary-foreground dark:text-white text-base font-semibold";
    companyClasses += " text-primary-foreground/70 dark:text-white text-sm";
    cardHeight = "h-[380px]";
  } else if (type === "large-light") {
    cardClasses += " bg-muted shadow-md";
    quoteClasses += " text-foreground dark:text-white text-lg md:text-xl font-medium leading-8";
    nameClasses += " text-foreground dark:text-white text-base font-semibold";
    companyClasses += " text-muted-foreground dark:text-white text-sm";
    cardHeight = "h-[380px]";
  } else {
    cardClasses += " bg-card shadow-sm";
    quoteClasses += " text-foreground/90 dark:text-white text-lg md:text-xl font-normal leading-6";
    nameClasses += " text-foreground dark:text-white text-sm font-semibold";
    companyClasses += " text-muted-foreground dark:text-white text-xs";
    cardHeight = "h-[280px]";
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      <div className={`relative font-normal break-words ${quoteClasses}`}>
        “{quote}”
      </div>
      <div className="relative flex flex-col mt-5">
        <div className={nameClasses}>{name}</div>
      </div>
    </div>
  );
};
