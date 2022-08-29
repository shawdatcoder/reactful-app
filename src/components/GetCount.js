import React from 'react'

class GetCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    render() {
        return <div>Count is {this.state.count}</div>
    }

    componentDidMount() {
        let outcomes = document.querySelectorAll('.outcome')
        let count = outcomes.length
        this.setState({ count: count })
    }
}

export { GetCount }
