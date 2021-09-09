import { useState } from "react";

function Hook(props) {
    const [list, setList] = useState(props);
    const [index, setIndex] = useState();

    const search = (string) => {
        let i = list.indexOf(string);
        setIndex(i !== -1 ? i + 1 : "NaN");
    };

    return [index, search];
}

export default Hook;