"use client"
import React, { useState, useEffect } from "react";
import axios from "../../lib/axios";
import Head from "next/head";
import Router from "next/router";
import Script from "next/script";

import CheckoutForm from "../../components/CheckoutForm";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51MRB4YGAxhWdhlP58Xjttd8NaeIGqSbVL36xEgi2yOtk16IIilw3qYMtDdqjelbCsfRFkPQlU13Ms9pODFzQugud00u6d4SNyh");


export default function App({ user }) {

	function loadStripe() {
		let style;

		style = {
			base: {
				iconColor: '#666EE8',
				color: '#31325F',
				lineHeight: '45px',
				fontSize: '15px',
			},
			complete: {
				color: 'green'
			},
		};


		let stripe = Stripe('pk_test_51MRB4YGAxhWdhlP58Xjttd8NaeIGqSbVL36xEgi2yOtk16IIilw3qYMtDdqjelbCsfRFkPQlU13Ms9pODFzQugud00u6d4SNyh');
		let elements = stripe.elements({
			clientSecret: user.token.intent.client_secret,
		});



		const cardNumber = elements.create('cardNumber', {
			showIcon: true, iconStyle: 'solid',
			style: style,
			placeholder: 'Card number',
		});
		cardNumber.mount('#card-element');

		let cardExpire = elements.create('cardExpiry', {
			style: style,
			placeholder: 'Expiration: mm/yy',
		});
		cardExpire.mount('#card-expiry');

		let cardCVC = elements.create('cardCvc', {
			style: style,
			placeholder: 'CVC code',
		});
		cardCVC.mount('#card-cvc');
	}

	return (
		<>
			<Script
				src="https://js.stripe.com/v3/"
				strategy="lazyOnload"
				onLoad={() => loadStripe()}
			/>
			<div className="App">
				<CheckoutForm />
			</div>
		</>
	);
}