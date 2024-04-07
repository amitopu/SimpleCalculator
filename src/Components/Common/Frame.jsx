import ButtonFrame from "./ButtonFrame";
import Screen from "./Screen";
export default function Frame() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-slate-300">
            <div className="w-auto text-center p-4 bg-white dark:bg-gray-800 rounded-3xl">
                <Screen></Screen>
                <ButtonFrame></ButtonFrame>
            </div>
        </div>
    );
}
