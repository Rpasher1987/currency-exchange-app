import React from 'react';
import CurrencyTable from './CurrencyTable';
import CurrencyConverter from './CurrencyConverter';
import Currencies from './Currencies';
import { Link } from 'react-router-dom';
import { json, checkStatus } from './utils';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      base: 'USD',
      rates: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.getRatesData(this.state.base);
  }

  changeBase = (event) => {
    this.setState({ base: event.target.value });
    this.getRatesData(event.target.value);
  }

  getRatesData = (base) => {
    this.setState({ loading: true });
    fetch(`https://www.frankfurter.app/latest?base=${base}`)
      .then(checkStatus)
      .then(json)
      .then(data => {
        if (data.error) {
          throw new Error(data.error);
        }

        const rates = Object.keys(data.rates)
          .filter(acronym => acronym !== base)
          .map(acronym => ({
            acronym,
            rate: data.rates[acronym],
            name: Currencies[acronym].name,
            symbol: Currencies[acronym].symbol,
          }))

        this.setState({ rates, loading: false });
      })
      .catch(error => console.error(error.message));
  }

  render () {
    const { base, rates, loading } = this.state;

    return (
      <React.Fragment>
        <div className="container myContent">
          <div className="row">
            <div className="col-sm-6">
                <form className="p-2 mt-3 bg-light form-inline justify-content-center border">
                  <h3 className="text-center">Base currency </h3>
                  <select value={base} onChange={this.changeBase} className="form-control form-control-lg mb-2" disabled={loading}>
                    {Object.keys(Currencies).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym}</option>)}
                  </select>
                </form>
                <div className="currencyTable border-dark">
                <CurrencyTable base={base} rates={rates} />
                </div>
            </div>
            <div className="col-sm-6">
            <CurrencyConverter/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;