interface SourceItem {
    key: string,
    name: string,
    type: string
    depth: number
}
export default function SourceItem( props: SourceItem) {
    
    const classMap = {
        0: "ml-0",
        1: "ml-5",
        2: "ml-10",
        3: "ml-15",
        4: "ml-20",
        5: "ml-25",
        6: "ml-30",
        7: "ml-35",
        8: "ml-40"
    }

    function clickHandler() {
        console.log("hi bitch")
    }

    return (
        <>
            <button onClick={clickHandler} className={`rounded flex w-auto bg-blue-400 border border-black self-start px-8 py-2 m-4 ${classMap[props.depth]}`}>{props.name}</button>
        </>
    )
}
