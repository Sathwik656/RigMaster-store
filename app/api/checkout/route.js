import Stripe from "stripe";
import '../../../envConfig'

const API_KEY = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(API_KEY, {
    apiVersion: '2025-11-17'
})

export async function POST(request){
    try{
        const {lineItems} = await request.json()
        console.log(lineItems)
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: lineItems,
            success_url: process.env.BASE_URL + '/success',
            cancel_url: process.env.BASE_URL + '/'
        })
        return Response.json(session)
    } catch (err){
        console.error('Error creating cart checkout: ',err.message)
        return Response.json({error: 'Failed to fetch data from stripe'})
    }
}