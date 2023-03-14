import React, { useEffect, useState } from "react";
import Head from 'next/head'



export default function CheckoutForm() {
	// let card = elements.create('card', { style: style });
	// card.mount('#card-element');

	return (
		<>
			{/* <body id="body-stripe"> */}
			<form id="payment-form">
				<div id="card-element">

				</div>
				<div id="card-expiry">

				</div>
				<div id="card-cvc">

				</div>
				{/* 
					<div id="card-element-errors" role="alert">

					</div> */}
				<button id="#button-stripe" type="submit">Subscribe</button>
			</form>
			{/* </body> */}
		</>
	);
}