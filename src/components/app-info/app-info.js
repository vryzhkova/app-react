import './app-info.css';

const AppInfo = ({ increased, emloyers}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {emloyers}</h2>
            <h2>Премии получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;