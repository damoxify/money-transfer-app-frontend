import React from 'react';
import { Link } from 'react-router-dom';
import '../fundsTransfer/styles/FundsTransfer.css';

function FundsTransfer() {

  return (
    <div>

        <span>
            <Link to={'/localTransfer'}><button>Local Transfer</button></Link>
        </span>
        <span>
            <Link to={'/InternationalTransfer'}><button>International Transfer</button></Link>
        </span>

    </div>
  )
}

export default FundsTransfer