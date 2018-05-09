import React, { Component } from 'react'
import { connect } from 'react-redux'


class Field extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1> 
                <input onChange={this.handleChanges} value={this.props.value} type="text"/>
            </div>
        )
    }
    //props agora tem acesso ao valor do reducer de field
}

function mapStateToProps(state) { //mapear os atributos do store pro props do componente. Abandona o uso do this.state, pra usar o state global (do redux). 
    return {
        value: state.field.value //state (redux) - field (dentro do reducers) - value (propriedade dentro do field reducer)
    }
}

//padrão decorator
export default connect(mapStateToProps)(Field) //agora o que tá sendo exportado da classe é o método do react-redux que chama o mapStateToProps e passa a classe Field como parametro