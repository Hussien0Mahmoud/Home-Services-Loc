const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 sm:p-6 border-t-4 border-orange-800 ${className}`}>
      {title && <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-3 sm:mb-4 text-right">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
