import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[40rem] mx-auto mb-12 lg:mb-20 text-center sm:text-center`}
    >
      {tag && <TagLine className="mb-4 flex justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 px-4 sm:px-0">{title}</h2>}
      {text && <p className="body-2 mt-1 text-n-4 px-4 sm:px-0">{text}</p>}
    </div>
  );
};

export default Heading;
