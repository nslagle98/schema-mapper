interface SourceItem {
    key: string,
    name: string,
    type: string
    depth: number
}
export default function SourceItem( props: SourceItem) {
    
    const depth = `ml-${props.depth * 5}`
    
    const depthMarginMap = [...Array(16).keys()]
    return (
        <>
            <div className={`rounded border border-black ${depth}`}>{props.name}</div>
        </>
    )
}
