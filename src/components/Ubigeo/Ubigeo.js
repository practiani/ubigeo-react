/*
import React, { Component } from 'react';

class Ubigeo extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          Ubigeo
        </p>
      </div>
    );
  }
}

export default Ubigeo;
*/

//import React from 'react';
import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../../actions/ubigeoAction';

import { connect } from 'react-redux';

import { loadUbigeos } from '../../actions/ubigeoAction';
import store from '../../reducers/ubigeoReducer';

const styles = {
    products: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    product: {
        width: '220px',
        marginLeft: 10,
        marginRight: 10
    }
};

class UbigeoList extends Component {

    componentWillMount() {
        store.dispatch(loadUbigeos());

    }

    render() {
        return (
            <div >


                <table table-responsive className="table-pagination">


                    <thead md-on-reorder="onReorder">
                        <tr>
                            <th>#</th>
                            <th className="col-hidden" data-order="nombre">nombre</th>
                            <th className="col-hidden" data-order="codigo">direccion</th>
                            <th>pais_nombre</th>
                            <th>tipo_ubigeo_nombre</th>
                            <th>padre_nombre</th>
                            <th colspan="2" className="align-options">acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.ubigeos.map(d =>
                            <tr key={d.id}>
                                <td>  </td>
                                <td> {d.nombre} </td>
                                <td> {d.codigo} </td>
                                <td> {d.pais_nombre} </td>
                                <td> {d.tipo_ubigeo_nombre} </td>
                                <td> {d.padre_nombre} </td>
                                <td>
                                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                        Button
                                    </button>

                                </td>
                                <td>
                                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                                        <i className="material-icons">add</i>
                                    </button>

                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        ubigeos: state.ubigeos
    };
};

const mapDispatchToProps = dispatch => {
    return {

        addToCart(product) {

            console.log("ADD_TO_CART " + product.name)
            dispatch(addToCart(product));


        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UbigeoList);

