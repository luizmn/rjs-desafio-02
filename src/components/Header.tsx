import "../styles/global.scss"

export function Header() {
return (
    <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
)
}