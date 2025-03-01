import { Card, CardContent } from "@/components/ui/timerCard";
import { useState, useEffect } from "react";
export default function Timer() {
  const counter = new Date("March 28,2025 9:30:00").getTime();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    setInterval(() => {
      var now = new Date().getTime();
      var timelapsed = counter - now;
      var min = Math.floor((timelapsed % (1000 * 60 * 60)) / (1000 * 60));
      var sec = Math.floor((timelapsed % (1000 * 60)) / 1000);
      setDay(Math.floor(timelapsed / (1000 * 60 * 60 * 24)));
      setHour(Math.floor((timelapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinute(min);
      setSecond(sec);
    }, 1000)
  }, [second])
  return (
    <div className="flex bg-black flex-col md:flex-row justify-center items-center gap-3 m-5 p-16 md:py-32  text-center">
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{day < 10 ? '0' + day : day}</h1>
          <p>days</p>
        </CardContent>
      </Card>
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{hour < 10 ? '0' + hour : hour}</h1>
          <p>hrs</p>
        </CardContent>
      </Card>
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{minute < 10 ? '0' + minute : minute}</h1>
          <p>mins</p>
        </CardContent>
      </Card>
      <Card className="bg-bgColor">
        <CardContent>
          <h1 className="text-slate-300 font-bold md:text-7xl text-5xl">{second < 10 ? '0' + second : second}</h1>
          <p>secs</p>
        </CardContent>
      </Card>
    </div>
  );
}
