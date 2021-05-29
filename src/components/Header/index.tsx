import  '../Content/content.scss';

export interface HeaderProps {
  selectedGenre: number;
}

export function Header({ selectedGenre }:HeaderProps) {

return (
  <header>
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  </header>

)
}