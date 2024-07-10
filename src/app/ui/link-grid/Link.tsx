interface LinkInterface {
    name: string,
    link: string
}

const Link = (props: LinkInterface) => {
    return (
        <a href={props.link}>
        <button className={"cursor-pointer rounded-full text-xl p-6 max-h-32 max-w-96" +
            " min-h-32 min-w-96 bg-gradient-to-br from-regal-blue via-regal-blue shadow-bottom-sm" +
            " text-white transition duration-300 ease-in-out drop-shadow-sm hover:bg-regal-blue hover:text-white"}>
            {props.name}
        </button>
        </a>
    )

}

export default Link;