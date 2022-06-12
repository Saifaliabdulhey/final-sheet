import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import Modal from 'react-modal'
import facebook1 from '../../images/facebook1.png'
import instagram1 from '../../images/instagram1.png'
import star from '../../images/star.png'
import AOS from "aos";
import "aos/dist/aos.css";



export class MonitorListItem extends Component {

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
      <div class="table-box">
      <div class="table-row">
          <div class="table-cell first-cell">
              <p>{this.props.img}</p>
          </div>
          <div class="table-cell">
              <p>49 inch</p>
          </div>
          <div class="table-cell last-cell">
              <p>{this.props.description}</p>
          </div>
          <div class="table-cell last-cell">
              <p>240Hz</p>
          </div>

          <div class="table-cell last-cell">
              <p>CURVED</p>
          </div>

          <div class="table-cell last-cell">
              <p>1MS</p>
          </div>

          <div class="table-cell last-cell">
              <p>VA</p>
          </div>
          <div class="table-cell last-cell brand">
              <p>{this.props.amount}</p>
          </div>

          <div class="table-cell last-cell">
              <p>VA</p>
          </div>

      </div>
  </div>
      </Link>

    )
  }
}

export default MonitorListItem;
