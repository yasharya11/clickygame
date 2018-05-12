import React from 'react';

const Header = (props)=> (
    <nav style={{background: "tan", color: "brown", align: "center"}} className={"navbar navbar-default sticky-top"}>
        <div className={"conatiner"}>
            <div><h1>Food Clicker Game</h1></div>
            <div>CURRENT SCORE:{props.score}</div>
        </div>
    </nav>
);

export default Header;