import { useDataContext } from "../../Context/DataContext";
import { Textfit } from "react-textfit";

export default function Screen() {
    const data = useDataContext();
    return (
        <div className="m-4 p-2 h-32 rounded-xl bg-slate-100 dark:bg-slate-600 text-gray-700 dark:text-gray-300 drop-shadow-lg text-2xl font-bold text-center">
            <Textfit mode="multi">{data.numString}</Textfit>
        </div>
    );
}
