export default function CheckoutForm({isLoading}) {
	

	return (
		<div id="form-holder" className={isLoading ? 'skeleton' : ''}>

			<form id="payment-form">
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
				<button id="button-stripe" type="submit">PAYER</button>
			</form>
			
		</div>
	);

}