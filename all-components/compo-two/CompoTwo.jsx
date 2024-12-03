import useCustom from "../custom-hooks/useCustom";


const CompoTwo = () => {
    const [count, handleCountDecrement, handleCountIncerment] = useCustom()
    return (
        <div>
            <div>
                <h1>compo two</h1>
                <div>{count}</div>
                <button onClick={handleCountIncerment}>increment</button>
                <button onClick={handleCountDecrement}>decrement</button>
            </div>
        </div>
    );
};

export default CompoTwo;


//এখানে useCustom() এটার মাদ্ধমে আমরা অই compo name কে use set করে hook এ পরিনিত করলাম আর যা যা retrun করা হয়েছিলো তা এই custom hook এর মদ্ধে distucturing আকারে রিসিভ করা হয়েছে [count, handleCountDecrement, handleCountIncerment]