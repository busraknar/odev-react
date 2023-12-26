import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductCard(props) {

	return (

		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top"  style={{ width: 256, height: 200 }} />
			<div className="card-body" style={{ height: '200px' }} > 
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
			</div>
			<div className="card-footer">
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button className="btn btn-danger">Sil</button>
			</div>
		</div>

	);
}
