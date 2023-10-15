interface SourceItem {
    name: string,
    type: string
}
export default function SourceItem( props: SourceItem) {
    
    return (
        <>
            <div className="rounded bg-blue-600">{props.name}</div>
        </>
    )
}
