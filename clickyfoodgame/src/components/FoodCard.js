import React from 'react';
import Image from './Image'
class FoodCard extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            key: this.props.id,
            name: this.props.food,
            selected: this.props.selected
        };
    }
    componentDidMount(){
        console.log(this.props.id, this.props.food, this.props.selected, this.props.counterCheck);
    }

    render(){
        return(
            <div onClick={()=>this.props.counterCheck(this.props.food,this.props.selected)} className={"col-3 mt-3"}>
                <Image imgSrc={this.props.food} />
            </div>
        )
    }

}

export default FoodCard