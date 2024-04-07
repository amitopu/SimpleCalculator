import { useDataContext } from "../../Context/DataContext";
import handlers from "../../APIs/ClickHandlers";

// eslint-disable-next-line react/prop-types
export default function Button({ value }) {
    const data = useDataContext();

    const handleClick = (val) => {
        const numString = data.numString;
        const updateNumString = data.updateNumString;
        let newNumString = "";
        if (val === "C") {
            newNumString = handlers["C"];
        } else if (val === "=") {
            newNumString = handlers["="](numString);
        } else if (val === "RND") {
            newNumString = handlers["RND"];
        } else {
            newNumString = numString + handlers["all"](val);
        }
        updateNumString(newNumString);
    };
    let styleEqual = `${value === "=" ? "col-span-2" : ""}`;
    let styleOperator = `${
        "^+-/*%X=".includes(value)
            ? "bg-orange-300 hover:bg-orange-500 drop-shadow-operator"
            : "bg-green-400 hover:bg-green-500 drop-shadow-general"
    }`;
    return (
        <div
            onClick={() => handleClick(value)}
            className={` ${styleEqual} ${styleOperator} p-2 rounded-xl   text-white dark:text-gray-600 text-center font-bold text-xl  border-1 border-white  cursor-pointer`}
        >
            {value}
        </div>
    );
}
