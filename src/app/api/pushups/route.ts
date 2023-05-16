import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const session = await getSession();

	const user = await prisma.user.findUnique({
		where: {
			email: session!.user.email,
		},
	});

	console.log(user);

	const pushups = await prisma.pushUp.findMany({
		where: {
			userId: user?.id,
		},
	});

	console.log(pushups);

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
