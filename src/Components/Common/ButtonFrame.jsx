import Button from "./Button";
import DeleteButton from "./DeleteButton";

export default function ButtonFrame() {
    const buttonVals = [
        ["(", ")", "RND", "x"],
        ["C", "%", "^", "/"],
        ["1", "2", "3", "X"],
        ["4", "5", "6", "-"],
        ["7", "8", "9", "+"],
        ["0", ".", "="],
    ];
    return (
        <div className="p-4 grid grid-cols-4 gap-2">
            {buttonVals.flat().map((val, index) => {
                return val === "x" ? (
                    <DeleteButton key={index}></DeleteButton>
                ) : (
                    <Button key={index} value={val}></Button>
                );
            })}
        </div>
    );
}
