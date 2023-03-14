"use client"
import React, { useState, useEffect } from "react";
import axios from "@/lib/axios";
import Head from "next/head";
import Script from "next/script";
import Header from "../header";
import Footer from "../footer";
import Loader from "@/components/loader";
import styles from "@/styles/stripe/stripe.module.css"
import Link from "next/link";

import CheckoutForm from "@/components/CheckoutForm";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51MRB4YGAxhWdhlP58Xjttd8NaeIGqSbVL36xEgi2yOtk16IIilw3qYMtDdqjelbCsfRFkPQlU13Ms9pODFzQugud00u6d4SNyh");


export default function App({ user, isLogged, logout }) {
	const [isLoading, setLoading] = useState(true)

	let intent;
	let stripe;
	let elements;
	function load() {
		axios.get('/api/v1/user-intent').then((res) => {
			intent = res.data.intent
			stripe = Stripe('pk_test_51MRB4YGAxhWdhlP58Xjttd8NaeIGqSbVL36xEgi2yOtk16IIilw3qYMtDdqjelbCsfRFkPQlU13Ms9pODFzQugud00u6d4SNyh');
			elements = stripe.elements({
				clientSecret: intent.intent.client_secret,
			});

			let style;

			style = {
				base: {
					iconColor: '#666EE8',
					color: '#472E23',
					lineHeight: '45px',
					fontSize: '15px',
				},
				complete: {
					color: 'green'
				},
			};

			const cardNumber = elements.create('cardNumber', {
				// showIcon: true, iconStyle: 'solid',
				style: style,
				placeholder: '1234 1234 1234 1234',
			});

			cardNumber.mount('#card-element');

			let cardExpire = elements.create('cardExpiry', {
				style: style,
				placeholder: 'MM / YY',
			});
			cardExpire.mount('#card-expiry');

			let cardCVC = elements.create('cardCvc', {
				style: style,
				placeholder: 'CVC',
			});
			cardCVC.mount('#card-cvc');
			setLoading(false)
		})

	}

    const toggleAccordion = (mainIndex, index)=>{
        document.querySelectorAll('.expandAccordionParent')[mainIndex]
        .querySelectorAll('.expandAccordion')[index]
        .classList.toggle('openAccordion')
    }
	
    let faqData = {
		"PAIEMENTS":[
		  {
			heading: "Quel est l'objectif de la plateforme?",
			content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
		  },
		  {
			heading: "Quel est l'objectif de la plateforme?",
			content: "It is agreed that the client wishes to market a new platform allowing recruiters and candidates in the restaurant and hotel sector to register and offer their job offers online or to apply for a job offer. Thus, it will be possible for candidates to search on the platform for a specific job offer according to pre-defined criteria and to apply for it."
		  }
		]
	  }
  
	  let faqKeys = Object.keys(faqData)
	  let faqValues = Object.values(faqData)



	return (
		<>
			<Script
				src="https://js.stripe.com/v3/"
				strategy="lazyOnload"
				onLoad={() => load()}
			/>

			<Head>
				<title>Subscription</title>
			</Head>

            <Header isLogged={isLogged} user={user} logout={logout} active="register"/>

			<main className="stripe mainWrapper">
				<h3>Payer</h3>

				<CheckoutForm isLoading={isLoading}/>

                <h1 className={styles.mainHeader}>Foire Aux Questions</h1>
                <h2 className={styles.intro}>Avez-vous des questions ? Nous sommes là pour vous répondre.</h2>

				{
					faqKeys.map((item, mainIndex) => {
						return(
							<div key={mainIndex} className={`expandAccordionParent ${styles.accordionParent}`}>
								<h1>{item}</h1>
								{faqValues[mainIndex].map((item, index) =>{
									return(
										<div key={index} className={`expandAccordion ${styles.accordion}`}>
											<h1 className={styles.header} onClick={()=> toggleAccordion(mainIndex, index)}>
												{item.heading}
											</h1>
											<div className={styles.content}>
												{item.content}
											</div>
										</div>
									)
								})}
							</div>
						)
					})
				}

				<div className={styles.sendRequest}>
                    <h3>Vous souhaitez nous contacter ?</h3>
                    <p>Envoyez-nous votre question et notre équipe vous reviendra dans les plus brefs délais..</p>
                    <Link href="/about">CONTACTEZ-NOUS</Link>
                </div>

				<div className={styles.goBack}>
					<span onClick={()=> history.back()}>
						<i className="fa-solid fa-chevron-left"></i> précédent
					</span>
				</div>
			</main>

			<Footer className="noMargin"/>
		</>
	);
}