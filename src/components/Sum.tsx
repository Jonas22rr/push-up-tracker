import { useRecoilState, useRecoilValue } from "recoil";
import Card from "./Card";

async function getAllPushups() {
  const res = await fetch(`/api/pushups`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default function Sum() {
  const pushUps = getAllPushups();

  const getSum = () => {
    let sum = 0;
    // pushUps?.map((pushUp) => {
    //   sum += Number(pushUp.pushUps);
    // });
    return sum;
  };
  return (
    <Card paddingY="py-4">
      <span className="text-xl">Push-up Sum: {getSum()}</span>
    </Card>
  );
}
