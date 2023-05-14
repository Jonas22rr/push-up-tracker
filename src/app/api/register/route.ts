import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { email, password } = (await req.json()) as {
			email: string;
			password: string;
		};
		const hashedPassword = await hash(password, 12);
		console.log({ email, password, hashedPassword });
		const user = await prisma.user.create({
			data: {
				email: email.toLowerCase(),
				password: hashedPassword,
			},
		});

		return NextResponse.json({
			user: {
				email: user.email,
			},
		});
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify({
				status: "error",
				message: error.message,
			}),
			{ status: 500 }
		);
	}
}

export async function GET(request: Request) {
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
	// return NextResponse.json({ message: "ok" });
}
