import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'


class Field extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1> 
                <input onChange={this.props.changeValue} value={this.props.value} type="text"/>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

//padrão decorator - connect ensina como jogar parte do estado dentro das props do component
export default connect(mapStateToProps, mapDispatchToProps)(Field) //agora o que tá sendo exportado da classe é o método do react-redux que chama o mapStateToProps e passa a classe Field como parametro