import React from 'react';
//import SearchBox from '../SearchBox/SearchBox';
import './Nav.css';

const Nav = (props) => {

    const SearchBoxStyle = {
        width:'100%',
        height:'20px',
        padding:'5px',
        border:'0px',
        margin:'0 10px 0 0'

    }

    const cartIconStyle = {
        maxWidth:'30px'
    }
 
    return(
        <nav className="header">
            <ul className = "main-nav">
                <li id = "bars"><i className = "fa fa-bars fa-2x"></i></li> 
                <li className = "lap-li" onClick = { () => props.click(0)}>首頁</li>
                <li className = "lap-li" onClick = { () => props.click(1)}>牌組編輯器</li>
                <li className = "lap-li" onClick = { () => props.click(0)}>關於本站</li>
                <form className="search">
                    <input type='text' name='productName' id='productName' style = {SearchBoxStyle}  />
                    <input className = "addSearchIcon" type='button' data-action="submit" onClick = {() => props.click(3)}/>
                </form>
                <div className = "push" >
                    <li className = "lap-li" onClick = { () => props.click(0)}>登入</li>
                    <li onClick = { () => props.click(2)}><img style = {cartIconStyle} alt = "購物車" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1MC4zOTEgNDUwLjM5MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTE0My42NzMsMzUwLjMyMmMtMjUuOTY5LDAtNDcuMDIsMjEuMDUyLTQ3LjAyLDQ3LjAyYzAsMjUuOTY5LDIxLjA1Miw0Ny4wMiw0Ny4wMiw0Ny4wMiAgICAgYzI1Ljk2OSwwLDQ3LjAyLTIxLjA1Miw0Ny4wMi00Ny4wMkMxOTAuNjk0LDM3MS4zNzQsMTY5LjY0MiwzNTAuMzIyLDE0My42NzMsMzUwLjMyMnogTTE0My42NzMsNDIzLjQ2NSAgICAgYy0xNC40MjcsMC0yNi4xMjItMTEuNjk1LTI2LjEyMi0yNi4xMjJjMC0xNC40MjcsMTEuNjk1LTI2LjEyMiwyNi4xMjItMjYuMTIyYzE0LjQyNywwLDI2LjEyMiwxMS42OTUsMjYuMTIyLDI2LjEyMiAgICAgQzE2OS43OTYsNDExLjc3LDE1OC4xLDQyMy40NjUsMTQzLjY3Myw0MjMuNDY1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMzQyLjIwNCwzNTAuMzIyYy0yNS45NjksMC00Ny4wMiwyMS4wNTItNDcuMDIsNDcuMDJjMCwyNS45NjksMjEuMDUyLDQ3LjAyLDQ3LjAyLDQ3LjAyczQ3LjAyLTIxLjA1Miw0Ny4wMi00Ny4wMiAgICAgQzM4OS4yMjQsMzcxLjM3NCwzNjguMTczLDM1MC4zMjIsMzQyLjIwNCwzNTAuMzIyeiBNMzQyLjIwNCw0MjMuNDY1Yy0xNC40MjcsMC0yNi4xMjItMTEuNjk1LTI2LjEyMi0yNi4xMjIgICAgIGMwLTE0LjQyNywxMS42OTUtMjYuMTIyLDI2LjEyMi0yNi4xMjJzMjYuMTIyLDExLjY5NSwyNi4xMjIsMjYuMTIyQzM2OC4zMjcsNDExLjc3LDM1Ni42MzEsNDIzLjQ2NSwzNDIuMjA0LDQyMy40NjV6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik00NDguMjYxLDc2LjAzN2MtMi4xNzYtMi4zNzctNS4xNTMtMy44NjUtOC4zNTktNC4xOEw5OS43ODgsNjcuMTU1TDkwLjM4NCwzOC40MiAgICAgQzgzLjc1OSwxOS4yMTEsNjUuNzcxLDYuMjQzLDQ1LjQ1Myw2LjAyOEgxMC40NDlDNC42NzgsNi4wMjgsMCwxMC43MDYsMCwxNi40NzdzNC42NzgsMTAuNDQ5LDEwLjQ0OSwxMC40NDloMzUuMDA0ICAgICBjMTEuMzYxLDAuMjUxLDIxLjM2NSw3LjU0NiwyNS4wNzgsMTguMjg2bDY2LjM1MSwyMDAuMDk4bC01LjIyNCwxMi4wMTZjLTUuODI3LDE1LjAyNi00LjA3NywzMS45MzgsNC43MDIsNDUuNDUzICAgICBjOC42OTUsMTMuMjc0LDIzLjMyMywyMS40NjYsMzkuMTg0LDIxLjk0M2gyMDMuMjMzYzUuNzcxLDAsMTAuNDQ5LTQuNjc4LDEwLjQ0OS0xMC40NDljMC01Ljc3MS00LjY3OC0xMC40NDktMTAuNDQ5LTEwLjQ0OSAgICAgSDE3NS41NDNjLTguOTU3LTAuMjI0LTE3LjIwMi00LjkzNi0yMS45NDMtMTIuNTM5Yy00LjY4OC03LjUxLTUuNjUxLTE2Ljc2Mi0yLjYxMi0yNS4wNzhsNC4xOC05LjQwNGwyMTkuOTUxLTIyLjk4OCAgICAgYzI0LjE2LTIuNjYxLDQ0LjAzNC0yMC4yMzMsNDkuNjMzLTQzLjg4NmwyNS4wNzgtMTA1LjAxMkM0NTAuOTYsODEuODkzLDQ1MC4zNiw3OC40OTIsNDQ4LjI2MSw3Ni4wMzd6IE00MDQuMzc2LDE4NS4yMjggICAgIGMtMy4zOTIsMTUuMjI2LTE2LjMxOSwyNi40NTctMzEuODY5LDI3LjY5bC0yMTcuMzM5LDIyLjQ2NUwxMDYuNTgsODguMDUzbDMyMC4yNjEsNC43MDJMNDA0LjM3NiwxODUuMjI4eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+" /></li>
                </div>
            </ul>
        </nav>
    )
}

             

export default Nav;

