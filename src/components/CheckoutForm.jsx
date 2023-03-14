import { useRef, useState } from "react";
import axios from '@/lib/axios';

export default function CheckoutForm({isLoading, intent, user, stripe, cardNumber}) {

	const form = useRef()

	const [selectedProduct, setProduct] = useState('price_1Mk5DOGAxhWdhlP53UxnOElf')
	const [freshIntent, setIntent] = useState(false)

	async function submitForm(e){
		e.preventDefault()

		const { setupIntent, error } = await stripe.confirmCardSetup(
			intent.intent.client_secret, {
				payment_method: {
					card: cardNumber,
					billing_details: { name: user.name }
				}
			}
		);

		// stripe.createToken(cardNumber).then((result)=>{
		// })
		
		setIntent(setupIntent.payment_method)
		axios.post('/api/v1/payment',{
			plan: selectedProduct,
			payment_method: setupIntent.payment_method
		})

	}

	return (
		<div id="form-holder" className={isLoading ? 'skeleton' : ''}>

			<form id="payment-form" onSubmit={(e)=>{submitForm(e)}} ref={form}>
				<div className="input">
					<label htmlFor="">Numéro de carte</label>
					<div id="card-element">
					
					</div>
				</div>

				<div className="input">
					<label htmlFor="">Date d'expiration</label>
					<div id="card-expiry">

					</div>
				</div>

				<div className="input">
					<label htmlFor="">Code CVC</label>
					<div id="card-cvc">

					</div>
				</div>

				<input type="hidden" name="payment_method" id="paymentMethod" value={!freshIntent ? '' : freshIntent}/>
				<button id="button-stripe" type="submit" data-secret={intent ? intent.intent.client_secret : ''}>PAYER</button>
			</form>
			
		</div>
	);

}