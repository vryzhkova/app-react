import EmployersListItem from "../employers-list-item/employers-list-item"

import './employers-list.css'

const EmloyersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem />
            <EmployersListItem />
            <EmployersListItem />
        </ul>
    )
}

export default EmloyersList;