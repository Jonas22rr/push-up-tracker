import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
	// const user = await getUser()

	const session = await getSession();

	const user = await prisma.user.findUnique({
		where: {
			email: session!.user.email,
		},
	});

	const pushups = await prisma.pushUp.findMany({
		where: {
			userId: user?.id,
		},
	});

	return NextResponse.json(pushups);
}

export async function POST(request: Request) {
	console.log(
		"--------------------------------------------- POST  BEGINNNNN---------------------------------------------"
	);
	const session = await getSession();

	const user = await prisma.user.findFirst({
		where: {
			email: session?.user!.email,
		},
	});
	// const user = await getUser()
	console.log(user);
	const pushUp =
		(await request.json()) as Prisma.PushUpCreateWithoutUserInput;
	console.log(pushUp);
	await prisma.pushUp.create({
		data: {
			...pushUp,
			userId: user!.id,
		},
	});
	console.log(
		"--------------------------------------------- POST  EEEENDDDDDDDDD---------------------------------------------"
	);
	return NextResponse.json({ message: "ok" });
}
