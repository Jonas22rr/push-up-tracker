import HistoryIndex from "@/components/History/Index";
import { PushUp, User } from "@prisma/client";
import { use } from "react";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function History() {
	const session = (await getServerSession(authOptions)) as Session;
	const pushUps = await prisma.pushUp.findMany({
		where: {
			userId: session.user.id as unknown as string,
		},
	});

	return (
		<>
			{pushUps.length ? (
				<HistoryIndex histories={pushUps as unknown as PushUp[]} />
			) : (
				<p className="h-screen w-screen bg-[#262626] ">
					very empty in here
				</p>
			)}
		</>
	);
}
