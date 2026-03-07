const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-full font-inter text-base font-medium transition-all duration-500 inline-block transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl btn-glow relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-primary-olive text-primary-black hover:bg-[#9ab85a] hover:shadow-[0_0_30px_rgba(137,168,74,0.5)]',
    secondary: 'bg-transparent border-2 border-primary-olive text-primary-olive hover:bg-primary-olive hover:text-primary-black hover:shadow-primary-olive/30',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
