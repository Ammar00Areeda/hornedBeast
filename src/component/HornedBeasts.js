/* eslint-disable react/jsx-no-undef */
import React from "react";

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }
    increaseNumberOfVotes = () => {
        this.setState({
            numOfVotes: this.state.numOfVotes + 1
        })
    }

    render() {
        return (
            




            <div>
               <Card style={{ width: '18rem' }}>
                    <Card.Img className='cardCat' variant="top" src={this.props.image_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            Number of votes {this.state.numOfVotes}
                        </Card.Text>
                        <Button onClick={this.increasenumOfVotes} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }



}

export default HornedBeasts;