import React, { Component } from 'react';
import Header from './components/Header'
import FoodCard from './components/FoodCard'
import './App.css'



class App extends Component {
    state= {
        counter: 0,
        foods:[
            {
              key: 1,
              name: "burgerking",
              selected: false
            },
            {
              key: 2,
              name: "dominos",
              selected: false
            },
            {
              key: 3,
              name: "fiveguys",
              selected: false
            },
            {
              key: 4,
              name: "innout",
              selected: false
            },
            {
              key: 5,
              name: "jerseymikes",
              selected: false
            },
            {
              key: 6,
              name: "mcdonalds",
              selected: false
            },
            {
              key: 7,
              name:"pandaexpress",
              selected: false
            },
            {
              key: 8,
              name: "papajohns",
              selected: false
            },
            {
          
              key: 9,
              name: "walmart",
              selected: false
            }
          
          ]
    };

    counterCheck=(name,selectedState)=>{
        let foodsArray = this.state.foods;
        foodsArray.sort(function(a, b){return 0.5 - Math.random()});

        if (selectedState){
            foodsArray.forEach(food=> food.selected = false);
            this.setState({foods: foodsArray, counter: 0})
        } else {
            foodsArray.forEach((food) => {
                if (food.name === name && food.selected === false) {
                    food.selected = true;
                    this.setState({foods: foodsArray, counter: this.state.counter + 1})
                }
            });
        }
    };

    render(){
        return(
            <wrapper>
                <Header score={this.state.counter} />
                <div className={"container"}>
                    <div className={"row"}>
                        {this.state.foods.map((food) => <FoodCard  key={food.key} id ={food.key} food={food.name} selected={food.selected} counterCheck={this.counterCheck}/>)}
                    </div>
                </div>
            </wrapper>
        )
    };
}

export default App;