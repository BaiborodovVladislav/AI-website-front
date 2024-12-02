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
      {children || "Section"}

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
