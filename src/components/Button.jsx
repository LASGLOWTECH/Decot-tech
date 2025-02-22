const Button = ({ children, onClick, type = 'button', className = '', variant = 'default' }) => {
    const baseClasses = 'px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2';
    const variants = {
        default: 'className=" rounded-sm bg-Secondarycolor px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-white hover:text-Secondrycolor focus:ring-3 focus:outline-hidden sm:w-auto focus:ring-Secondrycolor',
        primary: 'className=" rounded-sm border-[1px] border-white px-8 py-4 text-base font-medium  shadow-sm hover:bg-Secondarycolor hover:text-white hover:border-0 focus:ring-3 focus:outline-hidden sm:w-auto focus:ring-Secondrycolor',
        secondary: 'bg-green-500 hover:bg-green-600 focus:ring-green-300',
        // Add more variants as needed
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
