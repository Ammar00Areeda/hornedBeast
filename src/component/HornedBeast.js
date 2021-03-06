import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        };
    }

    increaseVote = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    };

    test() {
        this.props.show(this.props.title, this.props.image_url, this.props.description);
    }

    render() {
        return (
            <div className="card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        Number of votes: {this.state.votes}
                        </Card.Text>
                        <Button variant="primary" onClick={this.increaseVote}>Vote</Button>
                        <Button variant="info" onClick={this.test.bind(this)}>Show Model</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;