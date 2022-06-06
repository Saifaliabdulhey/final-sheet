import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import Modal from 'react-modal'
import facebook1 from '../images/facebook1.png'
import instagram1 from '../images/instagram1.png'
import star from '../images/star.png'
import AOS from "aos";
import "aos/dist/aos.css";



export class ExpenseListItem extends Component {

  constructor(props) {
    super(props)

    this.state = ({ modal: false })

  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
    });
  }


  render() {
    return (

      <Link className="list" to={`/edit/${this.props.id}`}>
        <div class="table-row">
          <div class="table-cell first-cell">
            <p>{this.props.description}</p>
          </div>
          <div class="table-cell">
            <p>999</p>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>
          <div class="table-cell last-cell">
            <a href="https://youtu.be/99vHH_6F0Ko">Watch Now</a>
          </div>

        </div>

      </Link>

    )
  }
}

export default ExpenseListItem;
