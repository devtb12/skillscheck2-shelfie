import React from 'react'

class Form extends React.Component {
    render () {
        return (
            <>
            <form>
            <input placeholder="Image URL" onChange={this.handleImageChange} />
                <input placeholder="Name of Product" onChange={this.handleProduct_nameChange} />
                <input placeholder="# of Product Items" onChange={this.handleQuantityChange} />
                <button onClick={}>Add</button>
                <button onClick={}>Cancel</button>
            </form>
        </>
        )
    }
}

export default Form