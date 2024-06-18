interface LinkInterface {
    name: string,
    link: string
}

const Link = (props: LinkInterface) => {
    return (
        <a href={props.link}>
        <button className={"rounded-3xl text-xl p-6 max-h-32 max-w-96 min-h-32 min-w-96 bg-regal-blue text-white"}>
            {props.name}</button>
        </a>
    )

}

export default Link;