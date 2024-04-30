import "./portfolioList.scss"


// eslint-disable-next-line react/prop-types
export default function PortfolioList({id,title, active, setSelected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=> setSelected(id)}>
        {title}
    </li>
  )
}

