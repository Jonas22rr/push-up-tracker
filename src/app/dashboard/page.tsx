
import Add from "@/components/Add/AddCard";
import NavBar from "@/components/NavBar";
import History from "@/components/History/HistoryCard";
import Sum from "@/components/Sum";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import { LogoutButton } from "../auth";

export default function Dashboard() {
    return (
        <Suspense >
            <div className="container mx-auto ">
                <div className="flex place-content-center">
                    <div className="flex w-3/4 flex-col space-y-10">
                        <div className="pt-10 text-center">
                            <span className=" text-5xl">Push-up </span>
                        </div>
                        <Add />
                        {/* <History /> */}
                        <Sum />
                        <LogoutButton/>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </Suspense>
    );
}
