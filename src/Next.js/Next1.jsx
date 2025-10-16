const Nav = () => {
    const lista =[{
        link:"/",
        texto:"inicio"
    },
    {
        link:"/tami",
        texto:"inicio"
    },
    {
        link:"/",
        texto:"inicio"
    },
    {
        link:"/",
        texto:"inicio"
    },
]

    return (
        <nav> 
        {lista.map((item,index)=>
        <Link key={index}
        className="p-1 ml-5 mt-3 rounded-3x1 bg-emerald-600"
        href={item.link}>
        {item.texto}
        </Link>)}
        </nav>
    )
}