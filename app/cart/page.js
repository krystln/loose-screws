"use client"

import ProdCard from "@components/ProdCard";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AccessDenied from "@components/AccessDenied";

const Cart = () => {
	const { data : session, loading } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin?callbackurl=/cart');
		}
	});

	if (typeof window !== 'undefined' && loading) return null

	if (!session) { return <AccessDenied /> }

	return (
		<div>
			<ProdCard img='/cart.svg' alt="pic" name="FlatHEad" price="$25.00" />
		</div>
	)
}

export default Cart;