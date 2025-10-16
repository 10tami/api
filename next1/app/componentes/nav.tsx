import Link from "next/link"

const Nav = () => {
    const lista =[{
        link:"/descanzo",
        texto:"inicio"
    },
    {
        link:"/tami",
        texto:"intermedio"
    },
    {
        link:"/reunio",
        texto:"descenlace"
    },
    {
        link:"/horario",
        texto:"final"
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