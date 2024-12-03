import { useState } from "react";


const useCustom = () => {
    const [count, setCount] = useState(0);

    const handleCountIncerment = () => {
        setCount(count + 1)
    }
    const handleCountDecrement = () => {
        setCount(count - 1)
    }

    return [count, handleCountDecrement, handleCountIncerment]
};

export default useCustom;


//এখানে এই compo তাই as a custom hook হিসেবে কাজ করছে এটা custom hook
//এখন এখানে আমি যা  যা অন্য compo তে use করতে চায় তা retrun করে দিছি ayyay এর মদ্ধে । আর যেখানে আমি use করবেন সেখানে আপনি এই compo name টাই এটা use এর মাদ্ধমে hook বানিয়ে রিসিভ করবো। যা compo two তে use করা আছে অখানে দেখতে পারেন।