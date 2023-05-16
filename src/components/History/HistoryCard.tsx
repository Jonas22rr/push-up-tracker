"use client";
import Card from "../Card";
import Icon from "@mdi/react";
import { mdiHistory } from "@mdi/js";
import { useRouter } from "next/navigation";

export default function History() {
	const router = useRouter();
	return (
		<Card spaceY="space-y-10" paddingY="py-10">
			<div className="text-center">
				<span className="text-white text-3xl">History</span>
			</div>
			<button
				className="btn-accent btn-lg  btn"
				onClick={() => router.push("/dashboard/history")}
			>
				<Icon path={mdiHistory} size={2} />
			</button>
		</Card>
	);
}
