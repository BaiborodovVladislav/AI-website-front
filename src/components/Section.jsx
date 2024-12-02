import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className = "",
  id,
  crosses,
  crossesOffset,
  customPuddings,
  children,
}) => {
  const defaultPaddings = customPuddings || "py-10 lg:py-16 sl:py-20";
  const additionalPaddings = crosses ? "lh:py-32 xl:py-40" : "";

  return (
    <div
      id={id}
      className={`relative ${defaultPaddings} ${additionalPaddings} ${
        className || ""
      }`}
    >
      {children && typeof children === "string" ? children : "Section"}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none mb:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none mb:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } 
			pointer-events-none lg:block xl:left-10 xl:right-10
 `}
          >
            <SectionSvg crossesOffset={crossesOffset} />
          </div>
        </>
      )}
    </div>
  );
};

export default Section;
