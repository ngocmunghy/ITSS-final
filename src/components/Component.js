import React, { useState } from "react";
import Hook from "../Hook";

function Component() {
    const list = ["Huyen", "Hoa", "Hung", "Long"];
    const [input, setInput] = useState("");
    const [index, search] = Hook(list);

    const clickSearch = () => {
        search(input);
    };

    const showList = (lists) => {
        let result = "[";
        lists.forEach((element) => {
            result = result + element + ", ";
        });
        result = result.substring(0, result.length - 2) + "]";
        return result;
    };

    return (
        <div style={{ padding: "50px" }}>
            <p>学生一覧：{showList(list)}</p>
            <div>
                <p>検索名前</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                　<button onClick={() => clickSearch()}>確認</button>
            </div>
            <p>検索名前: {input}</p>
            <p>位置：{index}</p>
        </div>
    );
}

export default Component;