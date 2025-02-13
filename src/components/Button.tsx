import { useNavigate } from "react-router-dom";

interface ButtonProps {
    path: string;
    name: string;
}

const Button: React.FC<ButtonProps> = ({ path, name }) => {
    const navigate = useNavigate();

    return (
        <button
            className='bg-black/50 w-screen h-6 text-white text-center cursor-pointer rounded-full hover:bg-black/100 sm:w-24'
            onClick={() => navigate(path)}
        >
            {name}
        </button>
    );
};

export default Button;