interface SourceItem {
    key: string,
    name: string,
    path: string,
    type: string
    depth: number
    active: boolean
}
export default function SourceItem( props: SourceItem) {
    
    const classMap = {

      0: "ml-4",
      1: "ml-12",
      2: "ml-20",
      3: "ml-28",
      4: "ml-36",
      5: "ml-44",
      6: "ml-52",
      7: "ml-60",
      8: "ml-68",
      9: "ml-76"
    
    }

    const activity = {
        true: '',
        false: 'cursor-not-allowed'
    }

    
/*
 * Have buttons be disabled until button in field adder is clicked, which activates the schema picker buttons for user to chose
 * which field as the source for their schema
 */
    function clickHandler() {
        console.log(props.path)        
    }

    return (
        <>
            <button onClick={clickHandler} className={`rounded flex w-auto bg-blue-300 border border-black font-mono  px-8 py-2 m-4 min-w-min ${classMap[props.depth]} ${activity[props.active.toString()]}`}>
                {props.name}
            </button>
        </>
    )
}
